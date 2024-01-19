// 1. Create an object for React element that has HTML anchor data.
const reactAnchorElement = {
	type: 'a',
	props: {
		href: 'http://www.google.com',
		children: 'Google',
		target: '_blank',
	},
}
// 2. Create a function that generates HTML code from reactElement and returns the final HTML tag.
const generateHtml = (reactElement) => {
	if (!reactElement.type) return

	const element = document.createElement(reactElement.type)

	if (reactElement.type === 'a') {
		element.setAttribute('href', reactElement?.props?.href)
		element.setAttribute('target', reactElement?.props?.target)
	}

	element.innerHTML = reactElement?.props?.children
		? reactElement.props.children
		: null

	return element
}
// 3. Create a function customRender that takes in the object and the path of HTML where it will be rendered.
const customRender = (reactElement) => {
	const root = document.getElementById('root')
	const generatedHtml = generateHtml(reactElement)
	root.appendChild(generatedHtml)
}

customRender(reactAnchorElement)
