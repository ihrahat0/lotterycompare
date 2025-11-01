import React from 'react';

// A visual "result screenshot" style card that displays crypto lottery draw summary
const BlockResultCard = ({ blockData }) => {
  if (!blockData) return null;
  
  const digits = blockData.winningNumber.split('');

  return (
    <div className="block-result-card wow fadeInUp">
      <div className="brc-header">
        <div className="brc-icon">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="12" fill="#3E3E5C"/>
            <path d="M20 12L22.5 17.5H28L23.5 21L25 26.5L20 23L15 26.5L16.5 21L12 17.5H17.5L20 12Z" fill="#fff"/>
          </svg>
        </div>
        <div className="brc-meta">
          <div className="brc-label">Block Number</div>
          <div className="brc-number">#{blockData.blockNumber}</div>
        </div>
        <div className="brc-status">{blockData.status}</div>
      </div>

      <div className="brc-body">
        <div className="brc-info-grid">
          <div className="brc-info-item">
            <div className="brc-key">Draw Date</div>
            <div className="brc-val">{blockData.drawDate}</div>
          </div>
          <div className="brc-info-item">
            <div className="brc-key">Prize Pool</div>
            <div className="brc-val">{blockData.prizePool}</div>
          </div>
          <div className="brc-info-item">
            <div className="brc-key">Total Tickets</div>
            <div className="brc-val">{blockData.totalTickets}</div>
          </div>
        </div>

        <div className="brc-winning">
          <div className="brc-key">Winning Number</div>
          <div className="brc-digits">
            {digits.map((d, i) => (
              <div key={i} className="digit-box">{d}</div>
            ))}
          </div>
        </div>

        <div className="brc-cta">
          <a 
            href={`https://firstbtclottery.com/en/lottery-tickets/block-detail?game_id=2&block=${blockData.blockNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="brc-btn"
          >
            View Winners
          </a>
        </div>

        <div className="brc-breakdown">
          <div className="brc-breakdown-header">
            <span className="brc-breakdown-label">Winners</span>
            <span className="brc-total-winners">{blockData.totalWinners} Winners</span>
          </div>
          <div className="brc-break-grid">
            {blockData.winnerBreakdown.map((item, idx) => (
              <div key={idx} className="brc-break-item">
                <span className="break-digits">{item.digits} Digits</span>
                <span className="break-count">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockResultCard;


