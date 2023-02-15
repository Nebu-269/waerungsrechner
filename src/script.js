function calc() {
    let euro = euroField.value;
    result = euro * 20.13;
    trl.value = result.toFixed(2).replace('.', ',');
}
