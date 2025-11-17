import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const sanitizeHTMLString = (html = '') =>
  html
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trim();

const getWordCount = (html = '') => {
  const text = html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!text) {
    return 0;
  }

  return text.split(' ').length;
};

const RichTextEditor = ({ value = '', onChange, placeholder = 'Write the full article here…' }) => {
  const editorRef = useRef(null);
  const [activeColor, setActiveColor] = useState('#f6f5ff');
  const [customColor, setCustomColor] = useState('#f97316');

  useEffect(() => {
    if (!editorRef.current) return;
    const incoming = sanitizeHTMLString(value || '');
    if (incoming !== sanitizeHTMLString(editorRef.current.innerHTML)) {
      editorRef.current.innerHTML = incoming;
    }
  }, [value]);

  const emitChange = useCallback(() => {
    if (!editorRef.current) return;
    const html = sanitizeHTMLString(editorRef.current.innerHTML);
    onChange?.(html === '<p><br></p>' ? '' : html);
  }, [onChange]);

  const exec = useCallback((command, commandValue = null) => {
    if (typeof document === 'undefined' || !editorRef.current) return;
    editorRef.current.focus();
    document.execCommand(command, false, commandValue);
    emitChange();
  }, [emitChange]);

  const handleLink = useCallback(() => {
    if (typeof window === 'undefined') return;
    const url = window.prompt('Enter URL', 'https://');
    if (url) {
      exec('createLink', url.startsWith('http') ? url : `https://${url}`);
    }
  }, [exec]);

  const handlePaste = useCallback((event) => {
    event.preventDefault();
    const text = event.clipboardData?.getData('text/plain');
    if (typeof document === 'undefined') return;
    document.execCommand('insertText', false, text);
    emitChange();
  }, [emitChange]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      exec(event.shiftKey ? 'outdent' : 'indent');
    }
  }, [exec]);

  const clearEditor = useCallback(() => {
    if (!editorRef.current) return;
    editorRef.current.innerHTML = '';
    emitChange();
  }, [emitChange]);

  const wordCount = useMemo(() => getWordCount(value), [value]);
  const estimatedMinutes = useMemo(
    () => (wordCount ? Math.max(1, Math.ceil(wordCount / 220)) : 0),
    [wordCount]
  );

  const colorPalette = useMemo(
    () => [
      { label: 'Primary', value: '#667eea' },
      { label: 'Accent', value: '#f97316' },
      { label: 'Emerald', value: '#10b981' },
      { label: 'Cyan', value: '#06b6d4' },
      { label: 'Slate', value: '#94a3b8' },
      { label: 'White', value: '#f8fafc' }
    ],
    []
  );

  const setTextColor = useCallback(
    (color) => {
      setActiveColor(color);
      exec('foreColor', color);
    },
    [exec]
  );

  const handleCustomColorChange = useCallback(
    (event) => {
      const value = event.target.value;
      setCustomColor(value);
      setTextColor(value);
    },
    [setTextColor]
  );

  const toolbarButtons = [
    [
      { label: '↺', title: 'Undo', action: () => exec('undo') },
      { label: '↻', title: 'Redo', action: () => exec('redo') }
    ],
    [
      { label: 'H1', title: 'Heading 1', action: () => exec('formatBlock', 'H1') },
      { label: 'H2', title: 'Heading 2', action: () => exec('formatBlock', 'H2') },
      { label: 'H3', title: 'Heading 3', action: () => exec('formatBlock', 'H3') },
      { label: '¶', title: 'Paragraph', action: () => exec('formatBlock', 'P') }
    ],
    [
      { label: 'B', title: 'Bold', action: () => exec('bold') },
      { label: 'I', title: 'Italic', action: () => exec('italic') },
      { label: 'U', title: 'Underline', action: () => exec('underline') },
      { label: '⎁', title: 'Monospace', action: () => exec('formatBlock', 'PRE') }
    ],
    [
      { label: '•', title: 'Bulleted list', action: () => exec('insertUnorderedList') },
      { label: '1.', title: 'Numbered list', action: () => exec('insertOrderedList') },
      { label: '❝', title: 'Quote', action: () => exec('formatBlock', 'BLOCKQUOTE') }
    ],
    [
      { label: 'Link', title: 'Insert link', action: handleLink },
      { label: 'HR', title: 'Divider', action: () => exec('insertHorizontalRule') },
      { label: 'CLR', title: 'Remove formatting', action: () => exec('removeFormat') }
    ]
  ];

  return (
    <div className="admin-rich-editor">
      <div className="admin-rte-toolbar" role="toolbar" aria-label="Formatting options">
        {toolbarButtons.map((group, index) => (
          <div className="admin-rte-group" key={`toolbar-group-${index}`}>
            {group.map((button) => (
              <button
                key={button.title}
                type="button"
                className="admin-rte-button"
                onClick={button.action}
                title={button.title}
                aria-label={button.title}
              >
                {button.label}
              </button>
            ))}
          </div>
        ))}
        <div className="admin-rte-color-picker">
          <span className="admin-rte-color-label">Text color</span>
          <div className="admin-rte-color-swatches">
            {colorPalette.map((color) => (
              <button
                type="button"
                key={color.value}
                className={`admin-rte-color-swatch ${activeColor === color.value ? 'active' : ''}`}
                style={{ backgroundColor: color.value }}
                onClick={() => setTextColor(color.value)}
                aria-label={`Apply ${color.label} text color`}
              />
            ))}
            <label className="admin-rte-custom-color">
              <input
                type="color"
                value={customColor}
                onChange={handleCustomColorChange}
                aria-label="Pick a custom text color"
              />
              <span>Custom</span>
            </label>
          </div>
        </div>
      </div>

      <div
        ref={editorRef}
        className="admin-rte-editor"
        contentEditable
        suppressContentEditableWarning
        data-placeholder={placeholder}
        onInput={emitChange}
        onBlur={emitChange}
        onPaste={handlePaste}
        onKeyDown={handleKeyDown}
      />

      <div className="admin-rte-footer">
        <div className="admin-rte-stats">
          <span>{wordCount} words</span>
          <span>·</span>
          <span>{estimatedMinutes || 0} min read</span>
        </div>
        <button type="button" className="admin-rte-clear" onClick={clearEditor}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default RichTextEditor;

