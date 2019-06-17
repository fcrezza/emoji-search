import emojiList from "./emojiList";

export default function filter(value, max) {
	return emojiList
		.filter(
			emoji =>
				emoji.title.toLowerCase().includes(value) ||
				emoji.keywords.includes(value)
		)
		.slice(0, max);
}
