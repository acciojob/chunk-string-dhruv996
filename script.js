function chunkString() {
  const inputString = document.getElementById('inputString').value;
  const chunkLength = parseInt(document.getElementById('chunkLength').value);

  const result = chunkStringFunction(inputString, chunkLength);

  document.getElementById('result').innerText = `Chunked String: ${JSON.stringify(result)}`;
}

function chunkStringFunction(str, chunkLength) {
  if (str === null) {
    return [];
  }

  const chunks = [];
  let index = 0;

  while (index < str.length) {
    chunks.push(str.substr(index, chunkLength));
    index += chunkLength;
  }

  return chunks;
}
