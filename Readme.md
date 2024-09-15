# Internet technologies course taken in Vilnius university 2022, autumn.

During whole semester we had to create the shop idea and implement different tasks camera shop, like foto foto in Vilnius)
## [Task 1](/Task1/)
- [x] **XML document** must be approximately A4 sheet size, neatly formatted, have at least 10 different tags, the root tag must have pro-annuals (23 different).
- [x] At least three different meaningful attributes must be used.
- [x] The following data types must be used:
    - [x] String
    - [x] Integer
    - [x] Floating-point number (use a period, e.g.: 100.53)
    - [x] Date in some format (e.g. YYYY-MM-DD, DD/MM/YYYYY, etc.)
- [x] **All** document tags must belong to the namespace you created, attributes must not belong to any namespace.
- [x] Tags must be used to model data descriptions, not data (see end of XML slide).???
- [x] Both default namespace markup and expressive namespace markup with a prefix must be used (i.e. for part of the document tags, specify the namespace by default, for part of the document tags, specify the namespace expressively)
- [x] The created XML document shall also be submitted in **JSON data interchange format**, i.e. create a JSON document containing the same data (as in the XML document).
## [Task 2](/Task2/)
- [x] A simple type restricting some Schema standard type, (this would be bar sensitivity)     - [x] Meaningful list type. Example of a non-meaningful list type: a list of elements of type `string`. It is meaningless because it can be replaced by one simple type: `string`.
- [x] Complex types with simple content,
    1. derive a restriction from your (non-XML Schema) base type (think about it)
    2. derive an extension from your base type
- [x] Complex types with complex content,
    1. derive a restriction from your base type
        1. derived by extension from your base type
- [x] Demonstrate the restriction principle - show an example where the restriction principle is violated and know how to fix the example,
- [x] Complex type with mixed content,
- [x] `choice` control structure,
- [x] At least one reference (`keyref`) to a uniqueness constraint (`unique`) or key (`key`)
- [x] All types you create must belong  to your namespace

**You need to write a JSON Schema ([draft-wright-json-schema-01](https://tools.ietf.org/html/draft-wright-json-schema-01)) document defining the structure of the JSON document you create, which includes:**

- [x] Use at least 4 different data types
- [x] The `enum` keyword used
- [x] At least 4 validation keywords used
- [x] At least 2 regular expressions used
- [x] Implemented schema extension using `allOf, anyOf, oneOf` keywords
- [x] Realised schema reuse: `definitions` and `$ref` keywords
## [Task 3](/Task3/)
- [x] The document must be a valid HTML5 document. Validators:
    - [**http://validator.nu**](http://validator.nu/)
    - [**http://validator.w3.org**](http://validator.w3.org/)
- [x] The layout of elements in the document must be modelled using **semantic** HTML5 elements (*header, nav, section, articile, ...*)
- [x] The use of these HTML elements must be demonstrated:
    - [x] Section and paragraph
    - [x] Figure
    - [x] Link to another page
    - [x] Table with meaningful use of the `colspan` and `rowspan` attributes
    - [x] Numbered and/or unnumbered list
    - [x] Data entry form with at least 5 different types of input fields meaningfully used. Demonstrate validation of mandatory fields.
    - [x] List (selection) component
1. The following CSS selectors must be used (and be able to explain how the first differs from the second and what they all mean):
    - [x] Descendant;
    - [x] Child;
    - [x] Attribute;
    - [x] Class;
    - [x] ID
- [x] The stylesheet created must contain an example of inheritance of properties, i.e. the `inherit' keyword must be used in a meaningful way (deleting this keyword should change the image on the screen), and it must be known what it means - [x] The stylesheet created must contain an example of a cascade mechanism, and it is necessary to use the keyword `!important' in a meaningful way (delete this keyword and the screen image should change), and to know what this keyword means, and to be aware of what the cascade mechanism is
- [x] Use the `@media` rule, which allows the browser to take into account the size of the screen of the device on which the page is being rendered, and to change the layout accordingly (*Media Queries Level*)
## [Task 4](/Task4/)
- [x] **Validation of form fields:**
    - [x] Input field where something must be entered (which cannot be left blank)
    - [x] Input field where a positive integer must be entered
    - [x] Input field(s) in which the correct date (year, month, day) must be entered (e.g. February cannot have 30 days); the `Date` object must be used
- [x] **Hiding/displaying (not throwing away)** of HTML page elements using the CSS property `display`, depending on what is entered in some form field (*must use jQuery library*);
- [x] **Dynamic modification of the content of a HTML page** (*must use jQuery library*):
    - [x] Modifying the textual content of existing HTML document tags (e.g. modifying paragraph text)
    - [x] Modifying the style of existing tags (by assigning a new value to the `style` attribute)
    - [x] Throwing away existing tags (e.g. deleting a paragraph specified by a number in an input field)
    - [x] Inserting new tags (e.g. adding a paragraph at the end of the text with the text entered in the input field)
- [x] **Asynchronous communication with remote server:**
    - [x] Serialisation of the data provided in the input form in JSON format and placement in one of the following systems (*using the API provided*):
        - [**http://myjson.com/api**](http://myjson.com/api)
        - [**https://jsonblob.com/api**](https://jsonblob.com/api)
    - [x] Extraction of data (in JSON format) *from* the above systems
    - [x] Displaying the extracted data in an HTML page table
## [Mini tasks](/MiniTasks/)

Tasks which were for a bonus point during the practice lectures.
