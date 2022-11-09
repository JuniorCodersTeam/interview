
# Interview Junior Coders 
---
- Pytania teoretyczne
	1. 6 mutujących metod tablicowych
		- `array.reverse()`
		-  `array.pop()`
		- `array.push()`
		- `array.sort()`
		- `array.shift()`
		- `array.slice()`
	2.  6 niemutujących metod tablicowych
		- `array.reduce()`
		- `array.filter()`
		- `array.map()`
		- `array.reduceRight()`
		- `array.forEach()`
		- `array.concat()`
	3.  Jak wygląda selektor brata/siostry ?
		- `div + div`
	4. Jakie znasz pseudoklasy w css ?
		- `:after`
		- `:before`
		- `:nth-child()`
		- `:last-child`
		- `:first-child`
		- `:hover`
	5. 3 sposoby na wypośrodkowanie div
		- position absolute transform: translate(-50%, -50%)
	6. co to są typy proste ?
		- [docs]( https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
		>  In [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript), a **primitive** (primitive value, primitive data type) is data that is not an [object](https://developer.mozilla.org/en-US/docs/Glossary/Object) and has no [methods](https://developer.mozilla.org/en-US/docs/Glossary/Method) or [properties](https://developer.mozilla.org/en-US/docs/Glossary/property/JavaScript). There are 7 primitive data types:
		>-   [string](https://developer.mozilla.org/en-US/docs/Glossary/String)
		>-   [number](https://developer.mozilla.org/en-US/docs/Glossary/Number)
		>-   [bigint](https://developer.mozilla.org/en-US/docs/Glossary/BigInt)
		>-   [boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
		>-   [undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined)
		>-   [symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
		>-   [null](https://developer.mozilla.org/en-US/docs/Glossary/Null)


	7. co to są typy złożone ?
		- [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
	8. Co to jest semantyka kodu? 
		- [docs](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
			> In programming, **Semantics** refers to the _meaning_ of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".

	9.  co to jest DOM ?
		- [docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
			># Document Object Model (DOM)
			>The **Document Object Model** (**DOM**) connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language.
			>
			>The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.
			>
			>Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.

- Zadanie praktyczne
	- Stwórz strukture plików
	- pobierz dane z API https://pokeapi.co/api/v2/pokemon/ditto
	- wyświetl dane z "game_indices" w liście elementów na stronie, element powinien mieć kolor wg property "name"
```javascript
(async function GetData() {  
  
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")  
    const result = await data.json()  
  
    console.log(result)  
  
    const toShow = result.game_indices.filter((el, i) => i < 10 && el)  
    console.log(toShow)  
  
    const dupa = document.querySelector("#dupa")  
    console.log(dupa)  
  
    dupa.innerHTML = toShow.map(el => `"<li style='height: 100px; width: 100px; background: red'>" ${el.version.name} ${el.version.url}`)  
  
  
})();

```

---
tags: #juniorCoders #interview 
date: *07-11-22*