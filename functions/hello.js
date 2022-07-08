const items = [
  { id: 1, name: 'mohammed' },
  { id: 2, name: 'ahmed' },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
