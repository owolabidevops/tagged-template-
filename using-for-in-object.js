const apple ={
    color:'red',
    size:'medium',
    weight:50,
    sugar:10
};

for(const prop in apple){
    const value=apple[prop];

    console.log(value,prop);
}