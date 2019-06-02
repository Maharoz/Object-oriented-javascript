const notes = ['Note 1', 'Note 2' , 'Note 3']

notes.pop()
notes.push('My New Notes')
notes.shift()
notes.unshift('My first note')
notes.splice(1,1)
console.log(notes.length);

console.log(notes);