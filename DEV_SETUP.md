# Development Setup - Quick Reference

## ✅ Fixed: Development Mode Now Works!

You no longer need to run `npm run build` to see changes. Just use `npm start`!

## 🚀 How to Run

### Option 1: React Dev Server Only (Recommended for Frontend Changes)
```bash
npm start
```
- Runs React dev server on **port 3000**
- Hot reload enabled - changes appear instantly
- API calls automatically proxied to port 3001
- **This is all you need for most development!**

### Option 2: Both React + API Server (For Full Stack Development)
```bash
npm run dev
```
- Runs React dev server on port 3000
- Runs Express API server on port 3001
- Both run concurrently
- Use this when you need to test API endpoints

### Option 3: API Server Only
```bash
npm run server
```
- Runs only the Express API server on port 3001
- Use this if React dev server is already running elsewhere

## 📦 Production Build

### Build for Production
```bash
npm run build
```

### Run Production Server
```bash
npm run prod
```
- Serves the built React app from `/build` folder
- Runs on port 3000 (or PORT env variable)

## 🔧 What Changed

### Before (❌ Wrong)
- `npm start` → Ran Express server → Served build folder
- Had to run `npm run build` every time to see changes

### After (✅ Correct)
- `npm start` → Runs React dev server → Hot reload works!
- `npm run server` → Runs Express API server
- `npm run dev` → Runs both together
- Build folder only served in production mode

## 🎯 Development Workflow

1. **Start Development:**
   ```bash
   npm start
   ```

2. **Make Changes:**
   - Edit any React component
   - Save the file
   - Browser automatically refreshes! ✨

3. **No Build Needed:**
   - Changes appear instantly
   - Hot module replacement enabled
   - Fast refresh for React components

## 🔍 Ports

- **Port 3000**: React Dev Server (frontend)
- **Port 3001**: Express API Server (backend)
- **Proxy**: React automatically proxies `/api/*` to port 3001

## 💡 Tips

- **Frontend changes only?** → Just `npm start`
- **Testing API endpoints?** → `npm run dev` (runs both)
- **Production testing?** → `npm run build` then `npm run prod`

## 🐛 Troubleshooting

### Port Already in Use?
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

### Changes Not Appearing?
1. Check browser console for errors
2. Make sure you're running `npm start` (not `npm run prod`)
3. Clear browser cache (Cmd+Shift+R on Mac)
4. Restart the dev server

### API Not Working?
- Make sure API server is running: `npm run server`
- Or run both: `npm run dev`
- Check that proxy in package.json points to port 3001

