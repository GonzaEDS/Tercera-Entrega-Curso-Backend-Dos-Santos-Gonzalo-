const styles = `<style>
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      background: bisque;
      padding: 2rem;
      max-width:100vw;  
    }
    table {
      background: gainsboro;
      color: black;
    }
    tbody tr:nth-child(odd) {
      background-color: #d2c6c6;
    }
    thead {
      text-transform: uppercase;
      font-family: monospace;
    }
    table, tr, th, td {
      border-collapse: collapse;
      border: 2px solid black;
      padding: 1em;
      font-size: 1.15rem;
      text-align:center;
    }
    td {
      font-family: sans-serif;
    }
    img {
      filter: drop-shadow(1px 1px 1px black);
    }
    @media only screen and (max-width: 500px) { 
      table, tr, th, td {
          border-collapse: collapse;
          padding: 0.7em;
          font-size: 1rem;
          text-align:center;
        }
    }
    
  </style>`

function getTrs(tag, objArray) {
  let trs = ''
  objArray.forEach(element => {
    let tds = ''
    let values = Object.values(element)

    values.forEach(value => {
      if (`${value}`.slice(0, 5) === 'https') {
        value = `<img src="${value}" alt="product image" width="100" height="100">`
      }
      tds = tds.concat(' ', `<${tag}>${value}</${tag}>`)
    })
    trs = trs.concat(' ', `<tr>${tds}</tr>`)
  })
  return trs
}

function pageWithTable(products) {
  const tableHeaders = [
    {
      first: 'Name',
      second: 'Price',
      third: 'Thumbnail',
      fourth: 'Id'
    }
  ]
  const head = `
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
${styles}
</head> `
  const page = ` 
      ${head}
      <body>
      <table>
      <thead>
        ${getTrs('th', tableHeaders)}
      </thead>
      <tbody>
        ${getTrs('td', products)}
      </tbody>
      </table>
      </body>`

  return page
}

module.exports = pageWithTable
