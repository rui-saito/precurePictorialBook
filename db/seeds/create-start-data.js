/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('purecures').del()
  await knex('purecures').insert([
    {
      id: 1,
      purecure_name: 'キュアブラック',
      purecure_human_name: '美墨なぎさ',
      voice_actor: '本名陽子',
      purecure_img: '',
      purecure_series: 'ふたりはプリキュア(MAX Heart)',
      purecure_remarks: '肉弾戦が得意',
      purecure_startday: '2004-04-01',
      purecure_endday: '2006-01-01',
    },
    {
      id: 2,
      purecure_name: 'キュアホワイト',
      purecure_human_name: '雪城ほのか',
      voice_actor: 'ゆかな',
      purecure_img: '',
      purecure_series: 'ふたりはプリキュア(MAX Heart)',
      purecure_remarks: '正統派なイメージ',
      purecure_startday: '2004-04-04',
      purecure_endday: '2006-01-01',
    },
    {
      id: 3,
      purecure_name: 'シャイニールミナス',
      purecure_human_name: '九条ひかり',
      voice_actor: '田中理恵',
      purecure_img: '',
      purecure_series: 'ふたりはプリキュアMAX Heart',
      purecure_remarks: '初期の黒と見分けがつかない',
      purecure_startday: '2006-02-01',
      purecure_endday: '2007-01-01',
    },
    {
      id: 4,
      purecure_name: 'キュアブルーム',
      purecure_human_name: '日向咲',
      voice_actor: '樹元オリエ',
      purecure_img: '',
      purecure_series: 'ふたりはプリキュアSplash Star',
      purecure_remarks: '初期の黒と見分けがつかない',
      purecure_startday: '2006-02-01',
      purecure_endday: '2007-01-01',
    },
    {
      id: 5,
      purecure_name: 'キュアイーグレット',
      purecure_human_name: '美翔舞',
      voice_actor: '榎本温子',
      purecure_img: '',
      purecure_series: 'ふたりはプリキュアSplash Star',
      purecure_remarks: '初期白と見分けがつかない',
      purecure_startday: '2006-02-01',
      purecure_endday: '2007-01-01',
    },
    {
      id: 6,
      purecure_name: 'キュアドリーム',
      purecure_human_name: '夢原のぞみ',
      voice_actor: '三瓶由布子',
      purecure_img: '',
      purecure_series: 'Yes!プリキュア5(5GOGO)',
      purecure_remarks: '初グループ化',
      purecure_startday: '2007-02-01',
      purecure_endday: '2008-01-01',
    },
    {
      id: 7,
      purecure_name: 'キュアルージュ',
      purecure_human_name: '夏木りん',
      voice_actor: '竹内純子',
      purecure_img: '',
      purecure_series: 'Yes!プリキュア5(5GOGO)',
      purecure_remarks: '初グループ化',
      purecure_startday: '2007-02-01',
      purecure_endday: '2008-01-01',
    },
    {
      id: 8,
      purecure_name: 'キュアレモネード',
      purecure_human_name: '春日野うらら',
      voice_actor: '伊瀬茉莉也',
      purecure_img: '',
      purecure_series: 'Yes!プリキュア5(5GOGO)',
      purecure_remarks: '初グループ化',
      purecure_startday: '2007-02-01',
      purecure_endday: '2008-01-01',
    },
    {
      id: 9,
      purecure_name: 'キュアミント',
      purecure_human_name: '秋元こまち',
      voice_actor: '永野愛',
      purecure_img: '',
      purecure_series: 'Yes!プリキュア5(5GOGO)',
      purecure_remarks: '初グループ化',
      purecure_startday: '2007-02-01',
      purecure_endday: '2008-01-01',
    },
    {
      id: 10,
      purecure_name: 'キュアアクア',
      purecure_human_name: '水無月かれん',
      voice_actor: '前田愛',
      purecure_img: '',
      purecure_series: 'Yes!プリキュア5(5GOGO)',
      purecure_remarks: '初グループ化',
      purecure_startday: '2007-02-01',
      purecure_endday: '2008-01-01',
    },
    {
      id: 11,
      purecure_name: 'ミルキィローズ',
      purecure_human_name: '美々野くるみ',
      voice_actor: '仙台エリ',
      purecure_img: '',
      purecure_series: 'Yes!プリキュア5GOGO',
      purecure_remarks: '初グループ化',
      purecure_startday: '2007-02-01',
      purecure_endday: '2008-01-01',
    },
    {
      id: 12,
      purecure_name: 'キュアピーチ',
      purecure_human_name: '桃園ラブ',
      voice_actor: '沖佳苗',
      purecure_img: '',
      purecure_series: 'フレッシュプリキュア!',
      purecure_remarks: '急に大人っぽくなった',
      purecure_startday: '2009-02-01',
      purecure_endday: '2010-01-01',
    },
    {
      id: 13,
      purecure_name: 'キュアベリー',
      purecure_human_name: '蒼乃美希',
      voice_actor: '喜多村英梨',
      purecure_img: '',
      purecure_series: 'フレッシュプリキュア!',
      purecure_remarks: '急に大人っぽくなった',
      purecure_startday: '2009-02-01',
      purecure_endday: '2010-01-01',
    },
    {
      id: 14,
      purecure_name: 'キュアパイン',
      purecure_human_name: '山吹祈里',
      voice_actor: '中川亜紀子',
      purecure_img: '',
      purecure_series: 'フレッシュプリキュア!',
      purecure_remarks: '急に大人っぽくなった',
      purecure_startday: '2009-02-01',
      purecure_endday: '2010-01-01',
    },
    {
      id: 15,
      purecure_name: 'キュアパッション',
      purecure_human_name: '東せつな',
      voice_actor: '小松由佳',
      purecure_img: '',
      purecure_series: 'フレッシュプリキュア!',
      purecure_remarks: '急に大人っぽくなった',
      purecure_startday: '2009-02-01',
      purecure_endday: '2010-01-01',
    },
    {
      id: 16,
      purecure_name: 'キュアブロッサム',
      purecure_human_name: '花咲つぼみ',
      voice_actor: '水樹奈々',
      purecure_img: '',
      purecure_series: 'ハートキャッチプリキュア!',
      purecure_remarks: '攻撃喰らうと変身が崩壊する',
      purecure_startday: '2010-02-01',
      purecure_endday: '2011-01-01',
    },
    {
      id: 17,
      purecure_name: 'キュアマリン',
      purecure_human_name: '来海えりか',
      voice_actor: '水沢史絵',
      purecure_img: '',
      purecure_series: 'ハートキャッチプリキュア!',
      purecure_remarks: '攻撃喰らうと変身が崩壊する',
      purecure_startday: '2010-02-01',
      purecure_endday: '2011-01-01',
    },
    {
      id: 18,
      purecure_name: 'キュアサンシャイン',
      purecure_human_name: '明堂院いつき',
      voice_actor: '桑島法子',
      purecure_img: '',
      purecure_series: 'ハートキャッチプリキュア!',
      purecure_remarks: '攻撃喰らうと変身が崩壊する',
      purecure_startday: '2010-02-01',
      purecure_endday: '2011-01-01',
    },
    {
      id: 19,
      purecure_name: 'キュアムーンライト',
      purecure_human_name: '月影ゆり',
      voice_actor: '久川綾',
      purecure_img: '',
      purecure_series: 'ハートキャッチプリキュア!',
      purecure_remarks: '攻撃喰らうと変身が崩壊する',
      purecure_startday: '2010-02-01',
      purecure_endday: '2011-01-01',
    },
    {
      id: 20,
      purecure_name: 'キュアメロディ',
      purecure_human_name: '北条響',
      voice_actor: '小清水亜美',
      purecure_img: '',
      purecure_series: 'スイートプリキュア♪',
      purecure_remarks: '友情の大切さが大事',
      purecure_startday: '2011-02-01',
      purecure_endday: '2012-01-01',
    },
    {
      id: 21,
      purecure_name: 'キュアリズム',
      purecure_human_name: '南野奏',
      voice_actor: '折笠富美子',
      purecure_img: '',
      purecure_series: 'スイートプリキュア♪',
      purecure_remarks: '友情の大切さが大事',
      purecure_startday: '2011-02-01',
      purecure_endday: '2012-01-01',
    },
    {
      id: 22,
      purecure_name: 'キュアビート',
      purecure_human_name: '黒川エレン',
      voice_actor: '豊口めぐみ',
      purecure_img: '',
      purecure_series: 'スイートプリキュア♪',
      purecure_remarks: '友情の大切さが大事',
      purecure_startday: '2011-02-01',
      purecure_endday: '2012-01-01',
    },
    {
      id: 23,
      purecure_name: 'キュアミューズ',
      purecure_human_name: '調辺アコ',
      voice_actor: '大久保瑠美',
      purecure_img: '',
      purecure_series: 'スイートプリキュア♪',
      purecure_remarks: '友情の大切さが大事',
      purecure_startday: '2011-02-01',
      purecure_endday: '2012-01-01',
    },
    {
      id: 24,
      purecure_name: 'キュアハッピー',
      purecure_human_name: '星空みゆき',
      voice_actor: '福圓美里',
      purecure_img: '',
      purecure_series: 'スマイルプリキュア!',
      purecure_remarks: '友情の大切さが大事',
      purecure_startday: '2012-02-01',
      purecure_endday: '2013-01-01',
    },
    {
      id: 25,
      purecure_name: 'キュアサニー',
      purecure_human_name: '日野あかね',
      voice_actor: '田野あさみ',
      purecure_img: '',
      purecure_series: 'スマイルプリキュア!',
      purecure_remarks: '友情の大切さが大事',
      purecure_startday: '2012-02-01',
      purecure_endday: '2013-01-01',
    },
    {
      id: 26,
      purecure_name: 'キュアピース',
      purecure_human_name: '黄瀬やよい',
      voice_actor: '金元寿子',
      purecure_img: '',
      purecure_series: 'スマイルプリキュア!',
      purecure_remarks: '友情の大切さが大事',
      purecure_startday: '2012-02-01',
      purecure_endday: '2013-01-01',
    },
    {
      id: 27,
      purecure_name: 'キュアマーチ',
      purecure_human_name: '緑川なお',
      voice_actor: '井上麻里奈',
      purecure_img: '',
      purecure_series: 'スマイルプリキュア!',
      purecure_remarks: '友情の大切さが大事',
      purecure_startday: '2012-02-01',
      purecure_endday: '2013-01-01',
    },
    {
      id: 28,
      purecure_name: 'キュアビューティ',
      purecure_human_name: '青木れいか',
      voice_actor: '西村ちなみ',
      purecure_img: '',
      purecure_series: 'スマイルプリキュア!',
      purecure_remarks: '友情の大切さが大事',
      purecure_startday: '2012-02-01',
      purecure_endday: '2013-01-01',
    },
    {
      id: 29,
      purecure_name: 'キュアハート',
      purecure_human_name: '相田マナ',
      voice_actor: '生天目仁美',
      purecure_img: '',
      purecure_series: 'ドキドキ!プリキュア',
      purecure_remarks: '主人公が生徒会長',
      purecure_startday: '2013-02-01',
      purecure_endday: '2014-01-01',
    },
    {
      id: 30,
      purecure_name: 'キュアダイヤモンド',
      purecure_human_name: '麦川六花',
      voice_actor: '寿美菜子',
      purecure_img: '',
      purecure_series: 'ドキドキ!プリキュア',
      purecure_remarks: '主人公が生徒会長',
      purecure_startday: '2013-02-01',
      purecure_endday: '2014-01-01',
    },
    {
      id: 31,
      purecure_name: 'キュアロゼッタ',
      purecure_human_name: '四葉ありす',
      voice_actor: '渕上舞',
      purecure_img: '',
      purecure_series: 'ドキドキ!プリキュア',
      purecure_remarks: '主人公が生徒会長',
      purecure_startday: '2013-02-01',
      purecure_endday: '2014-01-01',
    },
    {
      id: 32,
      purecure_name: 'キュアソード',
      purecure_human_name: '剣崎真琴',
      voice_actor: '宮本佳那子',
      purecure_img: '',
      purecure_series: 'ドキドキ!プリキュア',
      purecure_remarks: '主人公が生徒会長',
      purecure_startday: '2013-02-01',
      purecure_endday: '2014-01-01',
    },
    {
      id: 33,
      purecure_name: 'キュアエース',
      purecure_human_name: '円亜久里',
      voice_actor: '釘宮理恵',
      purecure_img: '',
      purecure_series: 'ドキドキ!プリキュア',
      purecure_remarks: '主人公が生徒会長',
      purecure_startday: '2013-02-01',
      purecure_endday: '2014-01-01',
    },
    {
      id: 34,
      purecure_name: 'キュアラブリー',
      purecure_human_name: '愛乃めぐみ',
      voice_actor: '中島愛',
      purecure_img: '',
      purecure_series: 'ハピネスチャージプリキュア!',
      purecure_remarks: '10周年',
      purecure_startday: '2014-02-01',
      purecure_endday: '2015-01-01',
    },
    {
      id: 35,
      purecure_name: 'キュアプリンセス',
      purecure_human_name: '白雪ひめ',
      voice_actor: '藩めぐみ',
      purecure_img: '',
      purecure_series: 'ハピネスチャージプリキュア!',
      purecure_remarks: '10周年',
      purecure_startday: '2014-02-01',
      purecure_endday: '2015-01-01',
    },
    {
      id: 36,
      purecure_name: 'キュアハニー',
      purecure_human_name: '大森ゆうこ',
      voice_actor: '北川里奈',
      purecure_img: '',
      purecure_series: 'ハピネスチャージプリキュア!',
      purecure_remarks: '10周年',
      purecure_startday: '2014-02-01',
      purecure_endday: '2015-01-01',
    },
    {
      id: 37,
      purecure_name: 'キュアフォーチュン',
      purecure_human_name: '氷川いおな',
      voice_actor: '戸松遥',
      purecure_img: '',
      purecure_series: 'ハピネスチャージプリキュア!',
      purecure_remarks: '10周年',
      purecure_startday: '2014-02-01',
      purecure_endday: '2015-01-01',
    },
    {
      id: 38,
      purecure_name: 'キュアラブリー',
      purecure_human_name: '愛乃めぐみ',
      voice_actor: '中島愛',
      purecure_img: '',
      purecure_series: 'ハピネスチャージプリキュア!',
      purecure_remarks: '10周年',
      purecure_startday: '2014-02-01',
      purecure_endday: '2015-01-01',
    },
    {
      id: 39,
      purecure_name: 'キュアフローラ',
      purecure_human_name: '春野はるか',
      voice_actor: '嶋村侑',
      purecure_img: '',
      purecure_series: 'Go!プリンセスプリキュア',
      purecure_remarks: 'ディスダークってい敵らしい',
      purecure_startday: '2015-02-01',
      purecure_endday: '2016-01-01',
    },
    {
      id: 40,
      purecure_name: 'キュアマーメイド',
      purecure_human_name: '海藤みなみ',
      voice_actor: '浅野真澄',
      purecure_img: '',
      purecure_series: 'Go!プリンセスプリキュア',
      purecure_remarks: 'ディスダークってい敵らしい',
      purecure_startday: '2015-02-01',
      purecure_endday: '2016-01-01',
    },
    {
      id: 41,
      purecure_name: 'キュアトゥインクル',
      purecure_human_name: '天ノ川きらら',
      voice_actor: '山村響',
      purecure_img: '',
      purecure_series: 'Go!プリンセスプリキュア',
      purecure_remarks: 'ディスダークってい敵らしい',
      purecure_startday: '2015-02-01',
      purecure_endday: '2016-01-01',
    },
    {
      id: 42,
      purecure_name: 'キュアスカーレット',
      purecure_human_name: '紅城トワ',
      voice_actor: '沢城みゆき',
      purecure_img: '',
      purecure_series: 'Go!プリンセスプリキュア',
      purecure_remarks: 'ディスダークってい敵らしい',
      purecure_startday: '2015-02-01',
      purecure_endday: '2016-01-01',
    },
    {
      id: 43,
      purecure_name: 'キュアミラクル',
      purecure_human_name: '朝日奈みらい',
      voice_actor: '高橋李依',
      purecure_img: '',
      purecure_series: '魔法使いプリキュア!',
      purecure_remarks: 'テーマプリンセス',
      purecure_startday: '2016-02-01',
      purecure_endday: '2017-01-01',
    },
    {
      id: 44,
      purecure_name: 'キュアマジカル',
      purecure_human_name: '十六夜リコ',
      voice_actor: '花江由衣',
      purecure_img: '',
      purecure_series: '魔法使いプリキュア!',
      purecure_remarks: 'テーマプリンセス',
      purecure_startday: '2016-02-01',
      purecure_endday: '2017-01-01',
    },
    {
      id: 45,
      purecure_name: 'キュアフェリーチェ',
      purecure_human_name: '花海ことは',
      voice_actor: '花見沙織',
      purecure_img: '',
      purecure_series: '魔法使いプリキュア!',
      purecure_remarks: 'テーマプリンセス',
      purecure_startday: '2016-02-01',
      purecure_endday: '2017-01-01',
    },
    {
      id: 46,
      purecure_name: 'キュアホイップ',
      purecure_human_name: '宇佐美いちか',
      voice_actor: '美山加恋',
      purecure_img: '',
      purecure_series: 'キラキラ☆プリキュアアラモード',
      purecure_remarks: 'プリアラって略すらしい',
      purecure_startday: '2017-02-01',
      purecure_endday: '2018-01-01',
    },
    {
      id: 47,
      purecure_name: 'キュアカスタード',
      purecure_human_name: '有栖川ひまり',
      voice_actor: '福原遥',
      purecure_img: '',
      purecure_series: 'キラキラ☆プリキュアアラモード',
      purecure_remarks: 'プリアラって略すらしい',
      purecure_startday: '2017-02-01',
      purecure_endday: '2018-01-01',
    },
    {
      id: 48,
      purecure_name: 'キュアジェラート',
      purecure_human_name: '立神あおい',
      voice_actor: '村中知',
      purecure_img: '',
      purecure_series: 'キラキラ☆プリキュアアラモード',
      purecure_remarks: 'プリアラって略すらしい',
      purecure_startday: '2017-02-01',
      purecure_endday: '2018-01-01',
    },
    {
      id: 49,
      purecure_name: 'キュアマカロン',
      purecure_human_name: '琴爪ゆかり',
      voice_actor: '藤田咲',
      purecure_img: '',
      purecure_series: 'キラキラ☆プリキュアアラモード',
      purecure_remarks: 'プリアラって略すらしい',
      purecure_startday: '2017-02-01',
      purecure_endday: '2018-01-01',
    },
    {
      id: 50,
      purecure_name: 'キュアショコラ',
      purecure_human_name: '剣城あきら',
      voice_actor: '森なな子',
      purecure_img: '',
      purecure_series: 'キラキラ☆プリキュアアラモード',
      purecure_remarks: 'プリアラって略すらしい',
      purecure_startday: '2017-02-01',
      purecure_endday: '2018-01-01',
    },
    {
      id: 51,
      purecure_name: 'キュアパルフェ',
      purecure_human_name: 'キラ星シエル',
      voice_actor: '森なな子',
      purecure_img: '',
      purecure_series: 'キラキラ☆プリキュアアラモード',
      purecure_remarks: 'プリアラって略すらしい',
      purecure_startday: '2017-02-01',
      purecure_endday: '2018-01-01',
    },
    {
      id: 52,
      purecure_name: 'キュアエール',
      purecure_human_name: '野乃はな',
      voice_actor: '引坂絵里',
      purecure_img: '',
      purecure_series: 'HUGっと!プリキュア',
      purecure_remarks: '過去作も出るらしい',
      purecure_startday: '2018-02-01',
      purecure_endday: '2019-01-01',
    },
    {
      id: 53,
      purecure_name: 'キュアアンジュ',
      purecure_human_name: '薬師寺さあや',
      voice_actor: '本泉莉菜',
      purecure_img: '',
      purecure_series: 'HUGっと!プリキュア',
      purecure_remarks: '過去作も出るらしい',
      purecure_startday: '2018-02-01',
      purecure_endday: '2019-01-01',
    },
    {
      id: 54,
      purecure_name: 'キュアエトワール',
      purecure_human_name: '耀木ほまれ',
      voice_actor: '小倉唯',
      purecure_img: '',
      purecure_series: 'HUGっと!プリキュア',
      purecure_remarks: '過去作も出るらしい',
      purecure_startday: '2018-02-01',
      purecure_endday: '2019-01-01',
    },
    {
      id: 55,
      purecure_name: 'キュアマシェリ',
      purecure_human_name: '愛崎えみる',
      voice_actor: '田村奈央',
      purecure_img: '',
      purecure_series: 'HUGっと!プリキュア',
      purecure_remarks: '過去作も出るらしい',
      purecure_startday: '2018-02-01',
      purecure_endday: '2019-01-01',
    },
    {
      id: 56,
      purecure_name: 'キュアムール',
      purecure_human_name: 'ルールー・アムール',
      voice_actor: '田村ゆかり',
      purecure_img: '',
      purecure_series: 'HUGっと!プリキュア',
      purecure_remarks: '過去作も出るらしい',
      purecure_startday: '2018-02-01',
      purecure_endday: '2019-01-01',
    },
    {
      id: 57,
      purecure_name: 'キュアムール',
      purecure_human_name: 'ルールー・アムール',
      voice_actor: '田村ゆかり',
      purecure_img: '',
      purecure_series: 'スター☆トゥインクルプリキュア',
      purecure_remarks: '過去作も出るらしい',
      purecure_startday: '2019-02-01',
      purecure_endday: '2020-01-01',
    },
    {
      id: 58,
      purecure_name: 'キュアスター',
      purecure_human_name: '星奈ひかる',
      voice_actor: '成瀬瑛美',
      purecure_img: '',
      purecure_series: 'スター☆トゥインクルプリキュア',
      purecure_remarks: '',
      purecure_startday: '2019-02-03',
      purecure_endday: '2020-01-26'
    },
    {
      id: 59,
      purecure_name: 'キュアミルキー',
      purecure_human_name: '羽衣ララ',
      voice_actor: '小原好美',
      purecure_img: '',
      purecure_series: 'スター☆トゥインクルプリキュア',
      purecure_remarks: '',
      purecure_startday: '2019-02-03',
      purecure_endday: '2020-01-26'
    },
    {
      id: 60,
      purecure_name: 'キュアソレイユ',
      purecure_human_name: '天宮えれな',
      voice_actor: '安野希世乃',
      purecure_img: '',
      purecure_series: 'スター☆トゥインクルプリキュア',
      purecure_remarks: '',
      purecure_startday: '2019-02-03',
      purecure_endday: '2020-01-26'
    },
    {
      id: 61,
      purecure_name: 'キュアセレーネ',
      purecure_human_name: '香久矢まどか',
      voice_actor: '小松未可子',
      purecure_img: '',
      purecure_series: 'スター☆トゥインクルプリキュア',
      purecure_remarks: '',
      purecure_startday: '2019-02-03',
      purecure_endday: '2020-01-26'
    },
    {
      id: 62,
      purecure_name: 'キュアコスモ',
      purecure_human_name: 'ユニ',
      voice_actor: '上坂すみれ',
      purecure_img: '',
      purecure_series: 'スター☆トゥインクルプリキュア',
      purecure_remarks: '',
      purecure_startday: '2019-02-03',
      purecure_endday: '2020-01-26'
    },
    {
      id: 63,
      purecure_name: 'キュアグレース',
      purecure_human_name: '花寺のどか',
      voice_actor: '悠木碧',
      purecure_img: '',
      purecure_series: 'ヒーリングっど♡プリキュア',
      purecure_remarks: 'お医者さんがテーマらしい',
      purecure_startday: '2020-02-03',
      purecure_endday: '2021-01-26'
    },
    {
      id: 64,
      purecure_name: 'キュアフォンテーヌ',
      purecure_human_name: '沢泉ちゆ',
      voice_actor: '依田菜津',
      purecure_img: '',
      purecure_series: 'ヒーリングっど♡プリキュア',
      purecure_remarks: 'お医者さんがテーマらしい',
      purecure_startday: '2020-02-03',
      purecure_endday: '2021-01-26'
    },
    {
      id: 65,
      purecure_name: 'キュアスパークル',
      purecure_human_name: '平光ひなた',
      voice_actor: '河野ひより',
      purecure_img: '',
      purecure_series: 'ヒーリングっど♡プリキュア',
      purecure_remarks: 'お医者さんがテーマらしい',
      purecure_startday: '2020-02-03',
      purecure_endday: '2021-01-26'
    },
    {
      id: 66,
      purecure_name: 'キュアアース',
      purecure_human_name: '風鈴アスミ',
      voice_actor: '三森すずこ',
      purecure_img: '',
      purecure_series: 'ヒーリングっど♡プリキュア',
      purecure_remarks: 'お医者さんがテーマらしい',
      purecure_startday: '2020-02-03',
      purecure_endday: '2021-01-26'
    },
    {
      id: 67,
      purecure_name: 'キュアサマー',
      purecure_human_name: '夏海まなつ',
      voice_actor: 'ファイルーズあい',
      purecure_img: '',
      purecure_series: 'トロピカル～ジュ!プリキュア',
      purecure_remarks: 'ビーチがテーマらしい',
      purecure_startday: '2021-02-06',
      purecure_endday: '2022-01-01'
    },
    {
      id: 68,
      purecure_name: 'キュアコーラル',
      purecure_human_name: '涼村さんご',
      voice_actor: '花守ゆみり',
      purecure_img: '',
      purecure_series: 'トロピカル～ジュ!プリキュア',
      purecure_remarks: 'ショッピングがテーマらしい',
      purecure_startday: '2021-02-06',
      purecure_endday: '2022-01-01'
    },
    {
      id: 69,
      purecure_name: 'キュアパパイア',
      purecure_human_name: '一之瀬みのり',
      voice_actor: '石川由依',
      purecure_img: '',
      purecure_series: 'トロピカル～ジュ!プリキュア',
      purecure_remarks: '音楽がテーマらしい',
      purecure_startday: '2021-02-06',
      purecure_endday: '2022-01-01'
    },
    {
      id: 70,
      purecure_name: 'キュアフラミンゴ',
      purecure_human_name: '滝沢あすか',
      voice_actor: '瀬戸麻沙美',
      purecure_img: '',
      purecure_series: 'トロピカル～ジュ!プリキュア',
      purecure_remarks: 'サッカーがテーマらしい',
      purecure_startday: '2021-02-06',
      purecure_endday: '2022-01-01'
    },
    {
      id: 71,
      purecure_name: 'キュアプレシャス',
      purecure_human_name: '和実ゆい',
      voice_actor: '菱川花菜',
      purecure_img: '',
      purecure_series: 'デリシャスパーティ♡プリキュア',
      purecure_remarks: 'お菓子がテーマらしい',
      purecure_startday: '2022-02-05',
      purecure_endday: '2023-01-01'
    },
    {
      id: 72,
      purecure_name: 'キュアスパイシー',
      purecure_human_name: '芙羽ここね',
      voice_actor: '清水理沙',
      purecure_img: '',
      purecure_series: 'デリシャスパーティ♡プリキュア',
      purecure_remarks: '料理がテーマらしい',
      purecure_startday: '2022-02-05',
      purecure_endday: '2023-01-01'
    },
    {
      id: 73,
      purecure_name: 'キュアヤムヤム',
      purecure_human_name: '華満らん',
      voice_actor: '井口裕香',
      purecure_img: '',
      purecure_series: 'デリシャスパーティ♡プリキュア',
      purecure_remarks: '音楽がテーマらしい',
      purecure_startday: '2022-02-05',
      purecure_endday: '2023-01-01'
    },
    {
      id: 74,
      purecure_name: 'キュアスカイ',
      purecure_human_name: 'ソラ・ハレワタール',
      voice_actor: '関根明良',
      purecure_img: '',
      purecure_series: 'ひろがるスカイ!プリキュア',
      purecure_remarks: '空がテーマらしい',
      purecure_startday: '2023-02-05',
      // purecure_endday: ''
    },
    {
      id: 75,
      purecure_name: 'キュアプリズム',
      purecure_human_name: '虹ヶ丘ましろ',
      voice_actor: '加隈亜衣',
      purecure_img: '',
      purecure_series: 'ひろがるスカイ!プリキュア',
      purecure_remarks: '絵画がテーマらしい',
      purecure_startday: '2023-02-05',
      // purecure_endday: ''
    },
    {
      id: 76,
      purecure_name: 'キュアウィング',
      purecure_human_name: '夕凪ツバサ',
      voice_actor: '村瀬歩',
      purecure_img: '',
      purecure_series: 'ひろがるスカイ!プリキュア',
      purecure_remarks: '人間ではないらしい',
      purecure_startday: '2023-02-05',
      // purecure_endday: ''
    },
    // {
    //   id: 77,
    //   purecure_name: 'キュアバタフライ',
    //   purecure_human_name: '七瀬彩夏',
    //   voice_actor: '',
    //   purecure_img: '',
    //   purecure_series: '',
    //   purecure_remarks: '',
    //   purecure_startday: '',
    //   purecure_endday: ''
    // },
  ]);
};
