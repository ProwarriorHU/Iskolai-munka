let series = [
    {
        "title": "A Trónok harca",
        "description": "Fantasy dráma egy középkori világban játszódik, ahol trónharcok és intrikák zajlanak.",
        "imdb_link": "https://www.imdb.com/title/tt0944947/?ref_=tt_mv_close",
        "image_reference": "game_of_thrones.png"
    },
    {
        "title": "Breaking Bad",
        "description": "Egy kémiai tanár rákos lesz, és a drogkereskedelemben próbálja megoldani pénzügyi problémáit.",
        "imdb_link": "https://www.imdb.com/title/tt0903747/?ref_=fn_al_tt_1",
        "image_reference": "breaking_bad.png"
    },
    {
        "title": "Sherlock",
        "description": "Sherlock Holmes és Dr. Watson modern kori krimiket old meg Londonban.",
        "imdb_link": "https://www.imdb.com/title/tt1475582/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_Sherlock",
        "image_reference": "sherlock.png"
    },
    {
        "title": "A Nagy Fal",
        "description": "Politikai intrikák és családi drámák a 16. századi Kínában.",
        "imdb_link": "https://www.imdb.com/title/tt2034800/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_A%2520Nagy%2520Fal",
        "image_reference": "the_great_wall.png"
    },
    {
        "title": "Black Mirror",
        "description": "Anthology sorozat, mely különböző jövőbeli technológiákkal kapcsolatos történeteket mutat be.",
        "imdb_link": "https://www.imdb.com/title/tt2085059/?ref_=fn_al_tt_1",
        "image_reference": "black_mirror.png"
    },
    {
        "title": "Vészhelyzet",
        "description": "Az élet egy Los Angeles-i kórház sürgősségi osztályán keresztül.",
        "imdb_link": "https://www.imdb.com/title/tt0108757/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_V%25C3%25A9szhelyzet",
        "image_reference": "er.png"
    },
    {
        "title": "Stranger Things",
        "description": "Egy kisvárosban játszódó krimi-sci-fi sorozat, ahol különleges események történnek.",
        "imdb_link": "https://www.imdb.com/title/tt4574334/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_Stranger%2520Things",
        "image_reference": "stranger_things.png"
    },
    {
        "title": "A Simpsons család",
        "description": "Anarchikus komédia egy amerikai családról.",
        "imdb_link": "https://www.imdb.com/title/tt0096697/?ref_=nv_sr_srsg_0_tt_3_nm_0_q_A%2520Simpsons%2520csal%25C3%25A1d",
        "image_reference": "the_simpsons.png"
    },
    {
        "title": "Mindhunter",
        "description": "Az FBI ügynökei sorozatgyilkosokat próbálnak megérteni és elkapni.",
        "imdb_link": "https://www.imdb.com/title/tt5290382/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_Mindhunter",
        "image_reference": "mindhunter.png"
    },
    {
        "title": "Westworld",
        "description": "Egy vadnyugati témapark, ahol az androidok fejlettebbek, mint a látogatók gondolnák.",
        "imdb_link": "https://www.imdb.com/title/tt0475784/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_Westworld",
        "image_reference": "westworld.png"
    }
]

document.addEventListener("onload", function(){
    series.forEach(element => {
        let row = document.getElementById("row")
        row.appendChild(
            `<img src="img/${}">`
        )
    });
})