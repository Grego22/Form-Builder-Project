// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();
//PRINT OUT from GOOGLE CHROME: Object {type: "text", label: "First Name", id: "user-first-name", icon: "fa-user", options: Array(0)}

// -------- Your Code Goes Below this Line --------
let _fields=document.querySelector('#fields') // also can use getElementbyid (no pound sign)
for (var i = 0; i < formData.length; i++) {
      let _data = formData[i] //optional, makes it easier THAN referencing formData[1] throughout document
      console.log ('Create HTML for ${_data.label}') // new way of referencing, old way is  + 'data.label'

    if(_data.type==='textarea'){
      let textarea = document.createElement('textarea')
      textarea.placeholder=_data.label //creating property of text area
      textarea.id=_data.id  // creating property of text area
      _fields.appendChild(textarea)

    }else if (_data.type === 'select'){
      let select = document.createElement('select')
      select.id = _data.id

      //loop inside a loop.  we want to create an elemnt for each options
      for (var i = 0; i < _data.options.length; i++) {
        let _opt = _data.options[i] //optional make things easier (instead of _data.options)
        let option = document.createElement('option')
        option.value = _opt.value
        option.textContent = _opt.label //similar to option.innerHtml
        select.appendChild(option)
      }
      _fields.appendChild(select)

    }
    else {
      let element = document.createElement('input')
      // to set HTML attributes on newly queried DOm elements
      // the formula is element.attribute = value
      element.type = _data.type
      element.placeholder = _data.label
      element.id = _data.id

      _fields.appendChild(element)
}
}
