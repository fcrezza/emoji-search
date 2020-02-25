import filterEmojis from './filterEmojis'

test('search 100 emoji', () => {
	const emoji = [{
    title: "100",
    symbol: "💯",
    keywords: "hundred points symbol symbol wow wow win win perfect perfect parties parties"
  }]
	expect(filterEmojis('100', 10)).toEqual(emoji)
})

test('search fire emojis', () => {
	const emojis = [
	{
	  title: "Fire",
	  symbol: "🔥",
	  keywords: "fire wth wth hot hot"
	},
	{
	  title: "Fire Engine",
	  symbol: "🚒",
	  keywords: "fire engine transportation truck 911 911"
	},
	  {
    title: "Sparkler",
    symbol: "🎇",
    keywords: "firework sparkler parties parties"
  },
	  {
    title: "Fireworks",
    symbol: "🎆",
    keywords: "fireworks parties parties"
  },
	]

	expect(filterEmojis('fire', 10)).toEqual(emojis)
})