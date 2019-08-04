# Ruby on Rails チュートリアルのサンプルアプリケーション

これは、次の教材で作られたサンプルアプリケーションです。   
[*Ruby on Rails チュートリアル: 実例を使って Rails を学ぼう*](http://railstutorial.jp/)
[Michael Hartl](http://www.michaelhartl.com/) 著

## ライセンス

[Ruby on Rails チュートリアル](http://railstutorial.jp/)内にあるすべてのソースコードは
MIT ライセンスと Beerware ライセンスのもとに公開されています。

## 使い方

このアプリケーションを動かす場合は、まずはリポジトリを手元にクローンしてください。
その後、次のコマンドで必要になる RubyGems をインストールします。

```
$ bundle install --without production --path vendor/bundle
```

その後、データベースのcreateとmigrateを実行します。

```
$ bundle exec rails db:create
$ bundle exec rails db:migrate
```

サンプルデータを作成します。

```
$ bundle exec rails db:seed
```

Railsサーバーを立ちあげて動作確認を行います。

```
$ bundle exec rails s
```

詳しくは、[*Ruby on Rails チュートリアル*](http://railstutorial.jp/)を参考にしてください。
