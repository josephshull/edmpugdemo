var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json({
        artists: [
            {name: "The Fat Rat", dailyListens: 3},
            {name: "Avicci", dailyListens: 10000000000},
            {name: "Excision", dailyListens: 5}
        ],
        topArtist: "Avicii"
    })
})

module.exports = router