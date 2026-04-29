# How to Add Your APK So Visitors Can Download It

## Step 1 — Build your APK
In Android Studio: **Build → Build Bundle(s) / APK(s) → Build APK(s)**
This creates a file like `app-release.apk` or `app-debug.apk`.

## Step 2 — Rename your APK
Rename your APK file to exactly:
```
masterbaker.apk
```
(All the download buttons on the website already point to this filename.)

## Step 3 — Place the APK in your website's root folder
Put `masterbaker.apk` in the **same folder as `index.html`** (the root of your deployed site).

Your folder structure should look like:
```
your-website/
├── index.html          ← your built site
├── masterbaker.apk     ← your APK goes here ✅
├── assets/
│   └── ...
└── ...
```

## Step 4 — Deploy & test
Upload everything (including the APK) to your web host (Netlify, Vercel, GitHub Pages, shared hosting, etc.).

Visit your site on an Android phone and tap **Download APK for Android** — the file should download directly.

---

## ⚠️ Tell Your Users
After downloading, Android will block the install by default.
Users need to go to: **Settings → Security → Install Unknown Apps**
and allow their browser to install APKs.

You can add this note to your site if you want — it's already shown under the download button.

---

## Want to change the APK filename?
Search all `.jsx` files for `masterbaker.apk` and replace with your new filename.
