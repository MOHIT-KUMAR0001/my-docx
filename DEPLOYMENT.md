# Deployment Guide

## Quick Deploy to Netlify

### Option 1: Deploy via GitHub (Recommended)

1. **Push your code to GitHub** (already done if you're reading this)

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select this repository

3. **Configure Build Settings**:
   The build settings are automatically detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

4. **Deploy**:
   - Click "Deploy site"
   - Your site will be live in 2-3 minutes!

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize the site
netlify init

# Deploy to production
netlify deploy --prod
```

## Custom Domain Setup

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS configuration instructions
5. SSL certificate is automatically provisioned

## Environment Variables

If you need to add environment variables:

1. Go to Netlify dashboard
2. Navigate to "Site settings" → "Environment variables"
3. Add your variables (e.g., `VITE_SITE_NAME`, `VITE_GA_ID`)
4. Redeploy the site

## Automatic Deployments

Every push to your main branch will automatically:
1. Trigger a new build
2. Run the production build
3. Deploy to your live site
4. Complete in 2-3 minutes

## Build Optimization

The current build is optimized with:
- Code splitting for better performance
- Gzip compression
- Minified assets
- Optimized images

## Troubleshooting

### Build Failures

If the build fails:
1. Check the deploy logs in Netlify dashboard
2. Ensure `package.json` has all dependencies
3. Verify Node version is 18 or higher
4. Test locally with `npm run build`

### 404 Errors

The `netlify.toml` includes SPA routing configuration. All routes redirect to `index.html` for proper hash routing.

## Performance

Expected build times:
- Initial build: 2-3 minutes
- Subsequent builds: 1-2 minutes

Expected site performance:
- Lighthouse score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## Monitoring

Monitor your site:
- Netlify Analytics (built-in)
- Google Analytics (add your tracking ID)
- Custom monitoring tools

## Support

For issues:
- Check Netlify documentation
- Review build logs
- Check GitHub repository issues
