function formatCalculation({ a, b, operation, result }) {
  return `${a} ${operation} ${b} = ${result}`;
}

function getSignByOperationName(operation) {
  const operations = {
    sum: "+",
    sub: "-",
    mul: "*",
    div: "/",
  };
  return operations[operation];
}

module.exports = { formatCalculation, getSignByOperationName };
