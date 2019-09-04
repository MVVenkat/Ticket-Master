const names=[
    "raj",
    "kamal",
    "kumar"
]


let options=names.map((name)=>{
    return {value: name, label: name}
})

console.log(options)