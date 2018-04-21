module.exports = db => {
  const cameras = [{
      "name": "Nikon D850",
      "price": "$3,033.04",
      "picture": "http://placehold.it/150x150",
      "rating": 3,
      "inCart": false
    },
    {
      "name": "Sony Alpha A7R III",
      "price": "$1,173.46",
      "picture": "http://placehold.it/150x150",
      "rating": 4,
      "inCart": false
    },
    {
      "name": "Fujifilm X-T2",
      "price": "$3,105.86",
      "picture": "http://placehold.it/150x150",
      "rating": 1,
      "inCart": false
    },
    {
      "name": "Nikon D3400",
      "price": "$2,854.78",
      "picture": "http://placehold.it/150x150",
      "rating": 5,
      "inCart": false
    },
    {
      "name": "Olympus OM-D E-M10 Mark III",
      "price": "$2,714.61",
      "picture": "http://placehold.it/150x150",
      "rating": 4,
      "inCart": false
    },
    {
      "name": "Panasonic Lumix ZS100 / TZ100",
      "price": "$3,924.20",
      "picture": "http://placehold.it/150x150",
      "rating": 2,
      "inCart": false
    },
    {
      "name": "Canon EOS Rebel T7i / 800D",
      "price": "$3,907.96",
      "picture": "http://placehold.it/150x150",
      "rating": 4,
      "inCart": false
    }
  ]

  cameras.forEach(camera => db.cameras.insert(camera))
}
