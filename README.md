# 计算机专业职业发展指北

> 在不确定的时代，做确定的自己

## 本地开发

```bash
cd docs
npm install
npm run dev
```

## 构建部署

```bash
npm run build
```

## 发布到 GitHub Pages

1. 在 GitHub 上创建仓库 `it-bestOffer`
2. 修改 `docs/.vitepress/config.ts` 中的 `base` 配置：
   ```ts
   base: '/it-bestOffer/',  // 替换为你的仓库名
   ```
3. 推送代码到 GitHub：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/it-bestOffer.git
   git push -u origin main
   ```
4. 在 GitHub 仓库设置中启用 Pages：
   - 进入 Settings → Pages
   - Source 选择 "GitHub Actions"
5. 等待 GitHub Actions 自动构建部署完成
6. 访问 `https://你的用户名.github.io/it-bestOffer/`

## License

Copyright © 2025 ByteOffer
