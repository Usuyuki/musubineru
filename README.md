# むすびねる(musubineru)

プロダクトの名前決め補助サービス.

名前の由来は ClickUp を参考にされたい.

## CI

[![API鯖への自動デプロイ](https://github.com/Usuyuki/musubineru/actions/workflows/api_automatic_deploy.yml/badge.svg)](https://github.com/Usuyuki/musubineru/actions/workflows/api_automatic_deploy.yml)

[![PR自動ラベル付与](https://github.com/Usuyuki/musubineru/actions/workflows/label.yml/badge.svg)](https://github.com/Usuyuki/musubineru/actions/workflows/label.yml)

## ローカル

```
git clone
```

```
docker-compose up -d
```

```
cp frontend/.env.example frontend/.env
```

## フロントエンド

Deno のフレームワーク Fresh1.0 を利用

http://localhost/

http://localhost/api

なんちゃってアイランドアーキテクチャ。

- DOM 操作：Preact(React のより軽量なもの)
- CSS フレームワーク：twind （ビルド不要な Tailwind てきなもの)

https://zenn.dev/azukiazusa/articles/fresh-tutorial

https://zenn.dev/k41531/articles/69c9342f7022dd

## バックエンド

go のフレームワーク gin を利用

## nlp

go の形態素解析ライブラリ、kagome を利用
