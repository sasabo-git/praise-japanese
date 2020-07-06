#!/usr/bin/env node
'use strict'

class SentenceOfPraise {
  constructor() {
    this.sentences = [
      'praise-japaneseを使ってくれてありがとう!あなたはすばらしい!!',
      'JavaScriptができるんですね!素敵です！',
      'コマンドラインを使えるなんてすごい！',
      'あなたがいてくれて助かったよ。ありがとう。',
      'あなたの生き方は、とてもかっこいい！',
      'あなたといると、とても落ち着くよ',
      'あなたといると元気になれるよ!',
      'あなたといると笑顔になれるよ!',
      '集中している時の顔、本当にかっこいいよ!',
      '今日なんだか雰囲気違いますね。いつも以上に素敵です。',
      'みんながあなたのことを褒めてたよ!',
      '考え方が大人で素敵です!',
      '説明が本当に分かりやすくて尊敬します！',
      'みんなのことをいつも考えてくれてありがとう!',
      '頭の回転が早いですね！尊敬します！',
      'あなたと話していると沢山勉強になります！',
      'バスケットでいったらマイケル・ジョーダン並にすごいよ!',
      'そのストイックさは私も見習いたいです!',
      'あなたがいたから、まとまったね!',
      'あなたのおかげで成功したね!',
      'もうそんなに進んだんですか？すごい！',
      'あなたがいたから今の私があるんです!',
      '好きなことを話しているのを見ると、こっちまで楽しくなっちゃうよ!',
      '笑った顔が素敵です!',
      'いつも目の付けどころが良いですよね!',
      '勉強家ですよね。見習いたいです!',
      'すごく機転がききますね!',
      'あなたなら安心しておまかせできます。',
      'また一緒に仕事させて下さい!',
      'とても優しいですね。いつもありがとう。',
    ]
  }

  selectSentences() {
    const elementNumber = this._getRandomInt(0, this.sentences.length)
    console.log(this.sentences[elementNumber])
  }

  // min <= return Int < max
  _getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }
}

const sentenceOfPraise = new SentenceOfPraise()
sentenceOfPraise.selectSentences()
