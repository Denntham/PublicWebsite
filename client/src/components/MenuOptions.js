const ROOM_TYPE = ["Kamar Tidur", "Ruang Makan", "Kantor", "Rumah"]
const LOCATIONS_DICT = {
    "states": [
        {
            "id": 1822,
            "name": "Aceh",
            "state_code": "AC",
            "cities": [
                {
                    "id": 56193,
                    "name": "Banda Aceh",
                    "latitude": "5.54167000",
                    "longitude": "95.33333000"
                },
                {
                    "id": 56223,
                    "name": "Bireun",
                    "latitude": "5.20300000",
                    "longitude": "96.70090000"
                },
                {
                    "id": 56307,
                    "name": "Kabupaten Aceh Barat",
                    "latitude": "4.45000000",
                    "longitude": "96.16667000"
                },
                {
                    "id": 56308,
                    "name": "Kabupaten Aceh Barat Daya",
                    "latitude": "3.83333000",
                    "longitude": "96.88333000"
                },
                {
                    "id": 56309,
                    "name": "Kabupaten Aceh Besar",
                    "latitude": "5.38333000",
                    "longitude": "95.51667000"
                },
                {
                    "id": 56310,
                    "name": "Kabupaten Aceh Jaya",
                    "latitude": "4.86000000",
                    "longitude": "95.64000000"
                },
                {
                    "id": 56311,
                    "name": "Kabupaten Aceh Selatan",
                    "latitude": "3.16667000",
                    "longitude": "97.41667000"
                },
                {
                    "id": 56312,
                    "name": "Kabupaten Aceh Singkil",
                    "latitude": "2.41667000",
                    "longitude": "97.91667000"
                },
                {
                    "id": 56313,
                    "name": "Kabupaten Aceh Tamiang",
                    "latitude": "4.25000000",
                    "longitude": "97.96667000"
                },
                {
                    "id": 56314,
                    "name": "Kabupaten Aceh Tengah",
                    "latitude": "4.51000000",
                    "longitude": "96.85500000"
                },
                {
                    "id": 56315,
                    "name": "Kabupaten Aceh Tenggara",
                    "latitude": "3.36667000",
                    "longitude": "97.70000000"
                },
                {
                    "id": 56316,
                    "name": "Kabupaten Aceh Timur",
                    "latitude": "4.63333000",
                    "longitude": "97.63333000"
                },
                {
                    "id": 56317,
                    "name": "Kabupaten Aceh Utara",
                    "latitude": "4.97000000",
                    "longitude": "97.14000000"
                },
                {
                    "id": 56353,
                    "name": "Kabupaten Bener Meriah",
                    "latitude": "4.73015000",
                    "longitude": "96.86156000"
                },
                {
                    "id": 56362,
                    "name": "Kabupaten Bireuen",
                    "latitude": "5.08333000",
                    "longitude": "96.58333000"
                },
                {
                    "id": 56408,
                    "name": "Kabupaten Gayo Lues",
                    "latitude": "3.95000000",
                    "longitude": "97.39000000"
                },
                {
                    "id": 56552,
                    "name": "Kabupaten Nagan Raya",
                    "latitude": "4.16667000",
                    "longitude": "96.51667000"
                },
                {
                    "id": 56593,
                    "name": "Kabupaten Pidie",
                    "latitude": "5.08000000",
                    "longitude": "96.11000000"
                },
                {
                    "id": 56634,
                    "name": "Kabupaten Simeulue",
                    "latitude": "2.61667000",
                    "longitude": "96.08333000"
                },
                {
                    "id": 56729,
                    "name": "Kota Banda Aceh",
                    "latitude": "5.54167000",
                    "longitude": "95.33333000"
                },
                {
                    "id": 56761,
                    "name": "Kota Langsa",
                    "latitude": "4.47000000",
                    "longitude": "97.93000000"
                },
                {
                    "id": 56762,
                    "name": "Kota Lhokseumawe",
                    "latitude": "5.13333000",
                    "longitude": "97.06667000"
                },
                {
                    "id": 56791,
                    "name": "Kota Sabang",
                    "latitude": "5.87944000",
                    "longitude": "95.33223000"
                },
                {
                    "id": 56800,
                    "name": "Kota Subulussalam",
                    "latitude": "2.75000000",
                    "longitude": "97.93333000"
                },
                {
                    "id": 56837,
                    "name": "Langsa",
                    "latitude": "4.46830000",
                    "longitude": "97.96830000"
                },
                {
                    "id": 56844,
                    "name": "Lhokseumawe",
                    "latitude": "5.18010000",
                    "longitude": "97.15070000"
                },
                {
                    "id": 56872,
                    "name": "Meulaboh",
                    "latitude": "4.14402000",
                    "longitude": "96.12664000"
                },
                {
                    "id": 56955,
                    "name": "Reuleuet",
                    "latitude": "5.21667000",
                    "longitude": "96.28333000"
                },
                {
                    "id": 56957,
                    "name": "Sabang",
                    "latitude": "5.88969000",
                    "longitude": "95.31644000"
                },
                {
                    "id": 56976,
                    "name": "Sigli",
                    "latitude": "5.38480000",
                    "longitude": "95.96090000"
                },
                {
                    "id": 56979,
                    "name": "Sinabang",
                    "latitude": "2.48030000",
                    "longitude": "96.38010000"
                },
                {
                    "id": 56982,
                    "name": "Singkil",
                    "latitude": "2.28740000",
                    "longitude": "97.78840000"
                }
            ]
        },
        {
            "id": 1826,
            "name": "Bali",
            "state_code": "BA",
            "cities": [
                {
                    "id": 56179,
                    "name": "Amlapura",
                    "latitude": "-8.45000000",
                    "longitude": "115.61667000"
                },
                {
                    "id": 56180,
                    "name": "Amlapura city",
                    "latitude": "-8.44869000",
                    "longitude": "115.60621000"
                },
                {
                    "id": 56200,
                    "name": "Banjar",
                    "latitude": "-8.19000000",
                    "longitude": "114.96750000"
                },
                {
                    "id": 56201,
                    "name": "Banjar Wangsian",
                    "latitude": "-8.49497000",
                    "longitude": "115.42342000"
                },
                {
                    "id": 56213,
                    "name": "Bedugul",
                    "latitude": "-8.45040000",
                    "longitude": "115.59250000"
                },
                {
                    "id": 56263,
                    "name": "Denpasar",
                    "latitude": "-8.65000000",
                    "longitude": "115.21667000"
                },
                {
                    "id": 56302,
                    "name": "Jimbaran",
                    "latitude": "-8.79093000",
                    "longitude": "115.16006000"
                },
                {
                    "id": 56322,
                    "name": "Kabupaten Badung",
                    "latitude": "-8.51667000",
                    "longitude": "115.20000000"
                },
                {
                    "id": 56334,
                    "name": "Kabupaten Bangli",
                    "latitude": "-8.28333000",
                    "longitude": "115.35000000"
                },
                {
                    "id": 56379,
                    "name": "Kabupaten Buleleng",
                    "latitude": "-8.25000000",
                    "longitude": "114.96667000"
                },
                {
                    "id": 56409,
                    "name": "Kabupaten Gianyar",
                    "latitude": "-8.46667000",
                    "longitude": "115.28333000"
                },
                {
                    "id": 56431,
                    "name": "Kabupaten Jembrana",
                    "latitude": "-8.30000000",
                    "longitude": "114.66667000"
                },
                {
                    "id": 56438,
                    "name": "Kabupaten Karang Asem",
                    "latitude": "-8.38910000",
                    "longitude": "115.53930000"
                },
                {
                    "id": 56460,
                    "name": "Kabupaten Klungkung",
                    "latitude": "-8.55000000",
                    "longitude": "115.40000000"
                },
                {
                    "id": 56658,
                    "name": "Kabupaten Tabanan",
                    "latitude": "-8.43333000",
                    "longitude": "115.06667000"
                },
                {
                    "id": 56720,
                    "name": "Klungkung",
                    "latitude": "-8.53333000",
                    "longitude": "115.40000000"
                },
                {
                    "id": 56750,
                    "name": "Kota Denpasar",
                    "latitude": "-8.66667000",
                    "longitude": "115.21663000"
                },
                {
                    "id": 56827,
                    "name": "Kuta",
                    "latitude": "-8.72332000",
                    "longitude": "115.17234000"
                },
                {
                    "id": 56841,
                    "name": "Legian",
                    "latitude": "-8.70415000",
                    "longitude": "115.17028000"
                },
                {
                    "id": 56846,
                    "name": "Lovina",
                    "latitude": "-8.14927000",
                    "longitude": "115.03999000"
                },
                {
                    "id": 56879,
                    "name": "Munduk",
                    "latitude": "-8.26866000",
                    "longitude": "115.07947000"
                },
                {
                    "id": 56884,
                    "name": "Negara",
                    "latitude": "-8.35694000",
                    "longitude": "114.61694000"
                },
                {
                    "id": 56890,
                    "name": "Nusa Dua",
                    "latitude": "-8.80047000",
                    "longitude": "115.23341000"
                },
                {
                    "id": 56970,
                    "name": "Seririt",
                    "latitude": "-8.19280000",
                    "longitude": "114.93880000"
                },
                {
                    "id": 56981,
                    "name": "Singaraja",
                    "latitude": "-8.11200000",
                    "longitude": "115.08818000"
                },
                {
                    "id": 57013,
                    "name": "Tabanan",
                    "latitude": "-8.54130000",
                    "longitude": "115.12522000"
                },
                {
                    "id": 57046,
                    "name": "Ubud",
                    "latitude": "-8.50980000",
                    "longitude": "115.26540000"
                }
            ]
        },
        {
            "id": 1820,
            "name": "Bangka Belitung Islands",
            "state_code": "BB",
            "cities": [
                {
                    "id": 56329,
                    "name": "Kabupaten Bangka",
                    "latitude": "-1.91667000",
                    "longitude": "105.93333000"
                },
                {
                    "id": 56330,
                    "name": "Kabupaten Bangka Barat",
                    "latitude": "-1.95839000",
                    "longitude": "105.53741000"
                },
                {
                    "id": 56331,
                    "name": "Kabupaten Bangka Selatan",
                    "latitude": "-2.66803000",
                    "longitude": "106.01257000"
                },
                {
                    "id": 56332,
                    "name": "Kabupaten Bangka Tengah",
                    "latitude": "-2.33989000",
                    "longitude": "106.11420000"
                },
                {
                    "id": 56350,
                    "name": "Kabupaten Belitung",
                    "latitude": "-2.86667000",
                    "longitude": "107.70000000"
                },
                {
                    "id": 56351,
                    "name": "Kabupaten Belitung Timur",
                    "latitude": "-2.96270000",
                    "longitude": "108.15216000"
                },
                {
                    "id": 56781,
                    "name": "Kota Pangkal Pinang",
                    "latitude": "-2.13333000",
                    "longitude": "106.13333000"
                },
                {
                    "id": 56859,
                    "name": "Manggar",
                    "latitude": "-2.88333000",
                    "longitude": "108.26667000"
                },
                {
                    "id": 56881,
                    "name": "Muntok",
                    "latitude": "-2.06719000",
                    "longitude": "105.16228000"
                },
                {
                    "id": 56912,
                    "name": "Pangkalpinang",
                    "latitude": "-2.12914000",
                    "longitude": "106.11377000"
                },
                {
                    "id": 57009,
                    "name": "Sungailiat",
                    "latitude": "-1.85442000",
                    "longitude": "106.12215000"
                },
                {
                    "id": 57017,
                    "name": "Tanjung Pandan",
                    "latitude": "-2.73353000",
                    "longitude": "107.63477000"
                }
            ]
        },
        {
            "id": 1810,
            "name": "Banten",
            "state_code": "BT",
            "cities": [
                {
                    "id": 56257,
                    "name": "Curug",
                    "latitude": "-6.26583000",
                    "longitude": "106.55639000"
                },
                {
                    "id": 56491,
                    "name": "Kabupaten Lebak",
                    "latitude": "-6.65000000",
                    "longitude": "106.21667000"
                },
                {
                    "id": 56574,
                    "name": "Kabupaten Pandeglang",
                    "latitude": "-6.63333000",
                    "longitude": "105.75000000"
                },
                {
                    "id": 56623,
                    "name": "Kabupaten Serang",
                    "latitude": "-6.15000000",
                    "longitude": "106.00000000"
                },
                {
                    "id": 56666,
                    "name": "Kabupaten Tangerang",
                    "latitude": "-6.20000000",
                    "longitude": "106.46667000"
                },
                {
                    "id": 56747,
                    "name": "Kota Cilegon",
                    "latitude": "-6.01667000",
                    "longitude": "106.01667000"
                },
                {
                    "id": 56796,
                    "name": "Kota Serang",
                    "latitude": "-6.12563000",
                    "longitude": "106.14999000"
                },
                {
                    "id": 56805,
                    "name": "Kota Tangerang",
                    "latitude": "-6.17944000",
                    "longitude": "106.62991000"
                },
                {
                    "id": 56806,
                    "name": "Kota Tangerang Selatan",
                    "latitude": "-6.29373000",
                    "longitude": "106.71244000"
                },
                {
                    "id": 56829,
                    "name": "Labuan",
                    "latitude": "-6.37840000",
                    "longitude": "105.83000000"
                },
                {
                    "id": 56909,
                    "name": "Pandeglang",
                    "latitude": "-6.30840000",
                    "longitude": "106.10670000"
                },
                {
                    "id": 56950,
                    "name": "Rangkasbitung",
                    "latitude": "-6.35910000",
                    "longitude": "106.24940000"
                },
                {
                    "id": 56969,
                    "name": "Serang",
                    "latitude": "-6.11528000",
                    "longitude": "106.15417000"
                },
                {
                    "id": 56996,
                    "name": "South Tangerang",
                    "latitude": "-6.28862000",
                    "longitude": "106.71789000"
                },
                {
                    "id": 57014,
                    "name": "Tangerang",
                    "latitude": "-6.17806000",
                    "longitude": "106.63000000"
                }
            ]
        },
        {
            "id": 1793,
            "name": "Bengkulu",
            "state_code": "BE",
            "cities": [
                {
                    "id": 56217,
                    "name": "Bengkulu",
                    "latitude": "-3.80044000",
                    "longitude": "102.26554000"
                },
                {
                    "id": 56258,
                    "name": "Curup",
                    "latitude": "-3.47030000",
                    "longitude": "102.52070000"
                },
                {
                    "id": 56355,
                    "name": "Kabupaten Bengkulu Selatan",
                    "latitude": "-4.35000000",
                    "longitude": "103.03333000"
                },
                {
                    "id": 56356,
                    "name": "Kabupaten Bengkulu Tengah",
                    "latitude": "-3.20679000",
                    "longitude": "102.12616000"
                },
                {
                    "id": 56357,
                    "name": "Kabupaten Bengkulu Utara",
                    "latitude": "-3.33333000",
                    "longitude": "102.05000000"
                },
                {
                    "id": 56444,
                    "name": "Kabupaten Kaur",
                    "latitude": "-4.78179000",
                    "longitude": "103.36109000"
                },
                {
                    "id": 56449,
                    "name": "Kabupaten Kepahiang",
                    "latitude": "-3.60194000",
                    "longitude": "102.56424000"
                },
                {
                    "id": 56492,
                    "name": "Kabupaten Lebong",
                    "latitude": "-3.24278000",
                    "longitude": "102.33490000"
                },
                {
                    "id": 56544,
                    "name": "Kabupaten Mukomuko",
                    "latitude": "-3.07438000",
                    "longitude": "101.54766000"
                },
                {
                    "id": 56609,
                    "name": "Kabupaten Rejang Lebong",
                    "latitude": "-3.43333000",
                    "longitude": "102.71667000"
                },
                {
                    "id": 56619,
                    "name": "Kabupaten Seluma",
                    "latitude": "-3.96644000",
                    "longitude": "102.47429000"
                },
                {
                    "id": 56739,
                    "name": "Kota Bengkulu",
                    "latitude": "-3.81667000",
                    "longitude": "102.31667000"
                }
            ]
        },
        {
            "id": 1802,
            "name": "Central Java",
            "state_code": "JT",
            "cities": [
                {
                    "id": 56174,
                    "name": "Adiwerna",
                    "latitude": "-6.93750000",
                    "longitude": "109.13250000"
                },
                {
                    "id": 56176,
                    "name": "Ambarawa",
                    "latitude": "-7.26333000",
                    "longitude": "110.39750000"
                },
                {
                    "id": 56186,
                    "name": "Baekrajan",
                    "latitude": "-6.76740000",
                    "longitude": "110.85410000"
                },
                {
                    "id": 56187,
                    "name": "Baki",
                    "latitude": "-7.61278000",
                    "longitude": "110.78389000"
                },
                {
                    "id": 56189,
                    "name": "Balapulang",
                    "latitude": "-7.04858000",
                    "longitude": "109.10056000"
                },
                {
                    "id": 56205,
                    "name": "Banyumas",
                    "latitude": "-7.51417000",
                    "longitude": "109.29417000"
                },
                {
                    "id": 56209,
                    "name": "Batang",
                    "latitude": "-6.48460000",
                    "longitude": "110.70830000"
                },
                {
                    "id": 56211,
                    "name": "Baturaden",
                    "latitude": "-7.30000000",
                    "longitude": "109.21667000"
                },
                {
                    "id": 56225,
                    "name": "Blora",
                    "latitude": "-6.96980000",
                    "longitude": "111.41860000"
                },
                {
                    "id": 56230,
                    "name": "Boyolali",
                    "latitude": "-7.53306000",
                    "longitude": "110.59583000"
                },
                {
                    "id": 56232,
                    "name": "Buaran",
                    "latitude": "-7.05000000",
                    "longitude": "109.55000000"
                },
                {
                    "id": 56235,
                    "name": "Bulakamba",
                    "latitude": "-6.87480000",
                    "longitude": "108.95590000"
                },
                {
                    "id": 56236,
                    "name": "Candi Prambanan",
                    "latitude": "-7.75000000",
                    "longitude": "110.49417000"
                },
                {
                    "id": 56238,
                    "name": "Ceper",
                    "latitude": "-7.67417000",
                    "longitude": "110.67889000"
                },
                {
                    "id": 56239,
                    "name": "Cepu",
                    "latitude": "-7.14750000",
                    "longitude": "111.59060000"
                },
                {
                    "id": 56255,
                    "name": "Colomadu",
                    "latitude": "-7.53333000",
                    "longitude": "110.75000000"
                },
                {
                    "id": 56256,
                    "name": "Comal",
                    "latitude": "-6.90530000",
                    "longitude": "109.53470000"
                },
                {
                    "id": 56260,
                    "name": "Delanggu",
                    "latitude": "-7.61667000",
                    "longitude": "110.68333000"
                },
                {
                    "id": 56262,
                    "name": "Demak",
                    "latitude": "-6.89090000",
                    "longitude": "110.63960000"
                },
                {
                    "id": 56269,
                    "name": "Dukuhturi",
                    "latitude": "-6.90000000",
                    "longitude": "109.08333000"
                },
                {
                    "id": 56277,
                    "name": "Gatak",
                    "latitude": "-7.59083000",
                    "longitude": "110.70444000"
                },
                {
                    "id": 56278,
                    "name": "Gebog",
                    "latitude": "-6.73500000",
                    "longitude": "110.84440000"
                },
                {
                    "id": 56283,
                    "name": "Gombong",
                    "latitude": "-7.60722000",
                    "longitude": "109.51417000"
                },
                {
                    "id": 56288,
                    "name": "Grogol",
                    "latitude": "-7.60111000",
                    "longitude": "110.81861000"
                },
                {
                    "id": 56289,
                    "name": "Gunung Kendil",
                    "latitude": "-7.33167000",
                    "longitude": "110.40417000"
                },
                {
                    "id": 56295,
                    "name": "Jaten",
                    "latitude": "-7.57722000",
                    "longitude": "110.89750000"
                },
                {
                    "id": 56297,
                    "name": "Jatiroto",
                    "latitude": "-7.88333000",
                    "longitude": "111.11667000"
                },
                {
                    "id": 56300,
                    "name": "Jekulo",
                    "latitude": "-6.80570000",
                    "longitude": "110.92620000"
                },
                {
                    "id": 56303,
                    "name": "Jogonalan",
                    "latitude": "-7.70361000",
                    "longitude": "110.53611000"
                },
                {
                    "id": 56305,
                    "name": "Juwana",
                    "latitude": "-6.71500000",
                    "longitude": "111.15140000"
                },
                {
                    "id": 56336,
                    "name": "Kabupaten Banjarnegara",
                    "latitude": "-7.35111000",
                    "longitude": "109.58750000"
                },
                {
                    "id": 56339,
                    "name": "Kabupaten Banyumas",
                    "latitude": "-7.45000000",
                    "longitude": "109.16667000"
                },
                {
                    "id": 56346,
                    "name": "Kabupaten Batang",
                    "latitude": "-7.03333000",
                    "longitude": "109.88333000"
                },
                {
                    "id": 56364,
                    "name": "Kabupaten Blora",
                    "latitude": "-7.06667000",
                    "longitude": "111.38333000"
                },
                {
                    "id": 56377,
                    "name": "Kabupaten Boyolali",
                    "latitude": "-7.50000000",
                    "longitude": "110.70000000"
                },
                {
                    "id": 56378,
                    "name": "Kabupaten Brebes",
                    "latitude": "-7.05000000",
                    "longitude": "108.90000000"
                },
                {
                    "id": 56392,
                    "name": "Kabupaten Cilacap",
                    "latitude": "-7.57417000",
                    "longitude": "108.98861000"
                },
                {
                    "id": 56397,
                    "name": "Kabupaten Demak",
                    "latitude": "-6.89930000",
                    "longitude": "110.61220000"
                },
                {
                    "id": 56413,
                    "name": "Kabupaten Grobogan",
                    "latitude": "-7.11667000",
                    "longitude": "110.91667000"
                },
                {
                    "id": 56433,
                    "name": "Kabupaten Jepara",
                    "latitude": "-6.58333000",
                    "longitude": "110.76667000"
                },
                {
                    "id": 56439,
                    "name": "Kabupaten Karanganyar",
                    "latitude": "-7.62806000",
                    "longitude": "111.06250000"
                },
                {
                    "id": 56445,
                    "name": "Kabupaten Kebumen",
                    "latitude": "-7.63917000",
                    "longitude": "109.66056000"
                },
                {
                    "id": 56448,
                    "name": "Kabupaten Kendal",
                    "latitude": "-7.02560000",
                    "longitude": "110.16850000"
                },
                {
                    "id": 56459,
                    "name": "Kabupaten Klaten",
                    "latitude": "-7.68333000",
                    "longitude": "110.61667000"
                },
                {
                    "id": 56472,
                    "name": "Kabupaten Kudus",
                    "latitude": "-6.80000000",
                    "longitude": "110.86667000"
                },
                {
                    "id": 56505,
                    "name": "Kabupaten Magelang",
                    "latitude": "-7.42750000",
                    "longitude": "110.16194000"
                },
                {
                    "id": 56583,
                    "name": "Kabupaten Pati",
                    "latitude": "-6.76667000",
                    "longitude": "111.10000000"
                },
                {
                    "id": 56585,
                    "name": "Kabupaten Pekalongan",
                    "latitude": "-7.03190000",
                    "longitude": "109.62400000"
                },
                {
                    "id": 56587,
                    "name": "Kabupaten Pemalang",
                    "latitude": "-7.03333000",
                    "longitude": "109.40000000"
                },
                {
                    "id": 56605,
                    "name": "Kabupaten Purbalingga",
                    "latitude": "-7.28417000",
                    "longitude": "109.35028000"
                },
                {
                    "id": 56607,
                    "name": "Kabupaten Purworejo",
                    "latitude": "-7.70000000",
                    "longitude": "109.96667000"
                },
                {
                    "id": 56610,
                    "name": "Kabupaten Rembang",
                    "latitude": "-6.78333000",
                    "longitude": "111.46667000"
                },
                {
                    "id": 56620,
                    "name": "Kabupaten Semarang",
                    "latitude": "-7.20667000",
                    "longitude": "110.44139000"
                },
                {
                    "id": 56643,
                    "name": "Kabupaten Sragen",
                    "latitude": "-7.41278000",
                    "longitude": "110.93500000"
                },
                {
                    "id": 56647,
                    "name": "Kabupaten Sukoharjo",
                    "latitude": "-7.68333000",
                    "longitude": "110.83333000"
                },
                {
                    "id": 56676,
                    "name": "Kabupaten Tegal",
                    "latitude": "-7.03333000",
                    "longitude": "109.16667000"
                },
                {
                    "id": 56679,
                    "name": "Kabupaten Temanggung",
                    "latitude": "-7.25000000",
                    "longitude": "110.11667000"
                },
                {
                    "id": 56692,
                    "name": "Kabupaten Wonogiri",
                    "latitude": "-7.91667000",
                    "longitude": "111.00000000"
                },
                {
                    "id": 56693,
                    "name": "Kabupaten Wonosobo",
                    "latitude": "-7.36139000",
                    "longitude": "109.92667000"
                },
                {
                    "id": 56699,
                    "name": "Karanganom",
                    "latitude": "-7.64889000",
                    "longitude": "110.62500000"
                },
                {
                    "id": 56701,
                    "name": "Kartasura",
                    "latitude": "-7.55194000",
                    "longitude": "110.73778000"
                },
                {
                    "id": 56706,
                    "name": "Kebonarun",
                    "latitude": "-7.70028000",
                    "longitude": "110.56306000"
                },
                {
                    "id": 56709,
                    "name": "Kedungwuni",
                    "latitude": "-6.97038000",
                    "longitude": "109.64794000"
                },
                {
                    "id": 56715,
                    "name": "Ketanggungan",
                    "latitude": "-6.93830000",
                    "longitude": "108.89100000"
                },
                {
                    "id": 56719,
                    "name": "Klaten",
                    "latitude": "-7.70583000",
                    "longitude": "110.60639000"
                },
                {
                    "id": 56765,
                    "name": "Kota Magelang",
                    "latitude": "-7.50000000",
                    "longitude": "110.22500000"
                },
                {
                    "id": 56786,
                    "name": "Kota Pekalongan",
                    "latitude": "-6.90000000",
                    "longitude": "109.68333000"
                },
                {
                    "id": 56792,
                    "name": "Kota Salatiga",
                    "latitude": "-7.33278000",
                    "longitude": "110.48333000"
                },
                {
                    "id": 56795,
                    "name": "Kota Semarang",
                    "latitude": "-7.03333000",
                    "longitude": "110.38333000"
                },
                {
                    "id": 56804,
                    "name": "Kota Surakarta",
                    "latitude": "-7.55000000",
                    "longitude": "110.81667000"
                },
                {
                    "id": 56811,
                    "name": "Kota Tegal",
                    "latitude": "-6.86860000",
                    "longitude": "109.11290000"
                },
                {
                    "id": 56821,
                    "name": "Kroya",
                    "latitude": "-7.63306000",
                    "longitude": "109.24611000"
                },
                {
                    "id": 56824,
                    "name": "Kudus",
                    "latitude": "-6.80480000",
                    "longitude": "110.84050000"
                },
                {
                    "id": 56828,
                    "name": "Kutoarjo",
                    "latitude": "-7.71694000",
                    "longitude": "109.91278000"
                },
                {
                    "id": 56838,
                    "name": "Lasem",
                    "latitude": "-6.69220000",
                    "longitude": "111.45270000"
                },
                {
                    "id": 56840,
                    "name": "Lebaksiu",
                    "latitude": "-7.04960000",
                    "longitude": "109.14410000"
                },
                {
                    "id": 56851,
                    "name": "Magelang",
                    "latitude": "-7.47056000",
                    "longitude": "110.21778000"
                },
                {
                    "id": 56853,
                    "name": "Majenang",
                    "latitude": "-7.29750000",
                    "longitude": "108.76420000"
                },
                {
                    "id": 56862,
                    "name": "Margasari",
                    "latitude": "-7.10000000",
                    "longitude": "109.01667000"
                },
                {
                    "id": 56870,
                    "name": "Mertoyudan",
                    "latitude": "-7.52000000",
                    "longitude": "110.22639000"
                },
                {
                    "id": 56873,
                    "name": "Mlonggo",
                    "latitude": "-6.53333000",
                    "longitude": "110.70000000"
                },
                {
                    "id": 56877,
                    "name": "Mranggen",
                    "latitude": "-7.02680000",
                    "longitude": "110.51580000"
                },
                {
                    "id": 56880,
                    "name": "Muntilan",
                    "latitude": "-7.58111000",
                    "longitude": "110.29278000"
                },
                {
                    "id": 56887,
                    "name": "Ngemplak",
                    "latitude": "-7.54972000",
                    "longitude": "110.71639000"
                },
                {
                    "id": 56922,
                    "name": "Pati",
                    "latitude": "-6.75590000",
                    "longitude": "111.03800000"
                },
                {
                    "id": 56924,
                    "name": "Pecangaan",
                    "latitude": "-6.69780000",
                    "longitude": "110.71070000"
                },
                {
                    "id": 56925,
                    "name": "Pekalongan",
                    "latitude": "-6.88860000",
                    "longitude": "109.67530000"
                },
                {
                    "id": 56929,
                    "name": "Pemalang",
                    "latitude": "-6.89193000",
                    "longitude": "109.38263000"
                },
                {
                    "id": 56944,
                    "name": "Purbalingga",
                    "latitude": "-7.38806000",
                    "longitude": "109.36389000"
                },
                {
                    "id": 56946,
                    "name": "Purwodadi",
                    "latitude": "-7.08680000",
                    "longitude": "110.91580000"
                },
                {
                    "id": 56947,
                    "name": "Purwokerto",
                    "latitude": "-7.42139000",
                    "longitude": "109.23444000"
                },
                {
                    "id": 56949,
                    "name": "Randudongkal",
                    "latitude": "-7.09810000",
                    "longitude": "109.32430000"
                },
                {
                    "id": 56953,
                    "name": "Rembangan",
                    "latitude": "-6.70360000",
                    "longitude": "111.34160000"
                },
                {
                    "id": 56958,
                    "name": "Salatiga",
                    "latitude": "-7.33194000",
                    "longitude": "110.49278000"
                },
                {
                    "id": 56964,
                    "name": "Selogiri",
                    "latitude": "-7.78333000",
                    "longitude": "110.86667000"
                },
                {
                    "id": 56965,
                    "name": "Semarang",
                    "latitude": "-6.99306000",
                    "longitude": "110.42083000"
                },
                {
                    "id": 56974,
                    "name": "Sidareja",
                    "latitude": "-7.48460000",
                    "longitude": "108.79230000"
                },
                {
                    "id": 56987,
                    "name": "Slawi",
                    "latitude": "-6.98160000",
                    "longitude": "109.14070000"
                },
                {
                    "id": 56991,
                    "name": "Sokaraja",
                    "latitude": "-7.45806000",
                    "longitude": "109.28806000"
                },
                {
                    "id": 56997,
                    "name": "Sragen",
                    "latitude": "-7.42639000",
                    "longitude": "111.02222000"
                },
                {
                    "id": 57012,
                    "name": "Surakarta",
                    "latitude": "-7.55611000",
                    "longitude": "110.83167000"
                },
                {
                    "id": 57024,
                    "name": "Tarub",
                    "latitude": "-6.93333000",
                    "longitude": "109.16667000"
                },
                {
                    "id": 57026,
                    "name": "Tayu",
                    "latitude": "-6.53970000",
                    "longitude": "111.05180000"
                },
                {
                    "id": 57028,
                    "name": "Tegal",
                    "latitude": "-6.86940000",
                    "longitude": "109.14020000"
                },
                {
                    "id": 57040,
                    "name": "Trucuk",
                    "latitude": "-7.71833000",
                    "longitude": "110.65889000"
                },
                {
                    "id": 57047,
                    "name": "Ungaran",
                    "latitude": "-7.13972000",
                    "longitude": "110.40500000"
                },
                {
                    "id": 57051,
                    "name": "Wangon",
                    "latitude": "-7.51611000",
                    "longitude": "109.05389000"
                },
                {
                    "id": 57053,
                    "name": "Wedi",
                    "latitude": "-7.74306000",
                    "longitude": "110.57944000"
                },
                {
                    "id": 57054,
                    "name": "Welahan",
                    "latitude": "-6.80000000",
                    "longitude": "110.71667000"
                },
                {
                    "id": 57055,
                    "name": "Weleri",
                    "latitude": "-6.97130000",
                    "longitude": "110.06660000"
                },
                {
                    "id": 57057,
                    "name": "Wiradesa",
                    "latitude": "-6.89220000",
                    "longitude": "109.61900000"
                },
                {
                    "id": 57059,
                    "name": "Wonopringgo",
                    "latitude": "-6.98333000",
                    "longitude": "109.61667000"
                },
                {
                    "id": 57060,
                    "name": "Wonosobo",
                    "latitude": "-7.35889000",
                    "longitude": "109.90306000"
                }
            ]
        },
        {
            "id": 1794,
            "name": "Central Kalimantan",
            "state_code": "KT",
            "cities": [
                {
                    "id": 56342,
                    "name": "Kabupaten Barito Selatan",
                    "latitude": "-1.86667000",
                    "longitude": "114.73333000"
                },
                {
                    "id": 56343,
                    "name": "Kabupaten Barito Timur",
                    "latitude": "-1.93333000",
                    "longitude": "115.10000000"
                },
                {
                    "id": 56344,
                    "name": "Kabupaten Barito Utara",
                    "latitude": "-0.98333000",
                    "longitude": "115.10000000"
                },
                {
                    "id": 56415,
                    "name": "Kabupaten Gunung Mas",
                    "latitude": "-0.95000000",
                    "longitude": "113.50000000"
                },
                {
                    "id": 56437,
                    "name": "Kabupaten Kapuas",
                    "latitude": "-2.01667000",
                    "longitude": "114.38333000"
                },
                {
                    "id": 56443,
                    "name": "Kabupaten Katingan",
                    "latitude": "-2.06667000",
                    "longitude": "113.40000000"
                },
                {
                    "id": 56469,
                    "name": "Kabupaten Kotawaringin Barat",
                    "latitude": "-2.40000000",
                    "longitude": "111.73333000"
                },
                {
                    "id": 56470,
                    "name": "Kabupaten Kotawaringin Timur",
                    "latitude": "-2.08333000",
                    "longitude": "112.75000000"
                },
                {
                    "id": 56482,
                    "name": "Kabupaten Lamandau",
                    "latitude": "-1.83828000",
                    "longitude": "111.28690000"
                },
                {
                    "id": 56547,
                    "name": "Kabupaten Murung Raya",
                    "latitude": "-0.01667000",
                    "longitude": "114.26667000"
                },
                {
                    "id": 56601,
                    "name": "Kabupaten Pulang Pisau",
                    "latitude": "-3.11858000",
                    "longitude": "113.86230000"
                },
                {
                    "id": 56625,
                    "name": "Kabupaten Seruyan",
                    "latitude": "-2.33333000",
                    "longitude": "112.25000000"
                },
                {
                    "id": 56646,
                    "name": "Kabupaten Sukamara",
                    "latitude": "-2.62675000",
                    "longitude": "111.23681000"
                },
                {
                    "id": 56777,
                    "name": "Kota Palangka Raya",
                    "latitude": "-1.76979000",
                    "longitude": "113.73126000"
                },
                {
                    "id": 56823,
                    "name": "Kualakapuas",
                    "latitude": "-3.00913000",
                    "longitude": "114.38759000"
                },
                {
                    "id": 56897,
                    "name": "Palangkaraya",
                    "latitude": "-2.20833000",
                    "longitude": "113.91667000"
                },
                {
                    "id": 56911,
                    "name": "Pangkalanbuun",
                    "latitude": "-2.68320000",
                    "longitude": "111.62590000"
                },
                {
                    "id": 56961,
                    "name": "Sampit",
                    "latitude": "-2.53150000",
                    "longitude": "112.94960000"
                }
            ]
        },
        {
            "id": 1813,
            "name": "Central Sulawesi",
            "state_code": "ST",
            "cities": [
                {
                    "id": 56326,
                    "name": "Kabupaten Banggai",
                    "latitude": "-0.91141000",
                    "longitude": "122.71836000"
                },
                {
                    "id": 56327,
                    "name": "Kabupaten Banggai Kepulauan",
                    "latitude": "-1.30236000",
                    "longitude": "123.03726000"
                },
                {
                    "id": 56328,
                    "name": "Kabupaten Banggai Laut",
                    "latitude": "-1.61841000",
                    "longitude": "123.49388000"
                },
                {
                    "id": 56383,
                    "name": "Kabupaten Buol",
                    "latitude": "1.04656000",
                    "longitude": "121.36867000"
                },
                {
                    "id": 56401,
                    "name": "Kabupaten Donggala",
                    "latitude": "-0.58333000",
                    "longitude": "119.85000000"
                },
                {
                    "id": 56541,
                    "name": "Kabupaten Morowali Utara",
                    "latitude": "-1.72070000",
                    "longitude": "121.24649000"
                },
                {
                    "id": 56578,
                    "name": "Kabupaten Parigi Moutong",
                    "latitude": "0.33680000",
                    "longitude": "120.17841000"
                },
                {
                    "id": 56598,
                    "name": "Kabupaten Poso",
                    "latitude": "-1.65000000",
                    "longitude": "120.50000000"
                },
                {
                    "id": 56630,
                    "name": "Kabupaten Sigi",
                    "latitude": "-1.38500000",
                    "longitude": "119.96694000"
                },
                {
                    "id": 56682,
                    "name": "Kabupaten Toli-Toli",
                    "latitude": "1.30862000",
                    "longitude": "120.88643000"
                },
                {
                    "id": 56780,
                    "name": "Kota Palu",
                    "latitude": "-0.86972000",
                    "longitude": "119.90000000"
                },
                {
                    "id": 56849,
                    "name": "Luwuk",
                    "latitude": "-0.95160000",
                    "longitude": "122.78750000"
                },
                {
                    "id": 56876,
                    "name": "Morowali Regency",
                    "latitude": "-2.76062000",
                    "longitude": "121.95267000"
                },
                {
                    "id": 56901,
                    "name": "Palu",
                    "latitude": "-0.90833000",
                    "longitude": "119.87083000"
                },
                {
                    "id": 56937,
                    "name": "Poso",
                    "latitude": "-1.39590000",
                    "longitude": "120.75240000"
                },
                {
                    "id": 57034,
                    "name": "Tojo Una-Una Regency",
                    "latitude": "-1.20360000",
                    "longitude": "121.48201000"
                }
            ]
        },
        {
            "id": 1827,
            "name": "East Java",
            "state_code": "JI",
            "cities": [
                {
                    "id": 56185,
                    "name": "Babat",
                    "latitude": "-7.11282000",
                    "longitude": "112.16354000"
                },
                {
                    "id": 56191,
                    "name": "Balung",
                    "latitude": "-7.73333000",
                    "longitude": "113.91667000"
                },
                {
                    "id": 56197,
                    "name": "Bangil",
                    "latitude": "-7.59939000",
                    "longitude": "112.81860000"
                },
                {
                    "id": 56198,
                    "name": "Bangkalan",
                    "latitude": "-7.04550000",
                    "longitude": "112.73510000"
                },
                {
                    "id": 56206,
                    "name": "Banyuwangi",
                    "latitude": "-8.23250000",
                    "longitude": "114.35755000"
                },
                {
                    "id": 56210,
                    "name": "Batu",
                    "latitude": "-7.87000000",
                    "longitude": "112.52833000"
                },
                {
                    "id": 56219,
                    "name": "Besuki",
                    "latitude": "-7.73379000",
                    "longitude": "113.69785000"
                },
                {
                    "id": 56224,
                    "name": "Blitar",
                    "latitude": "-8.09830000",
                    "longitude": "112.16810000"
                },
                {
                    "id": 56227,
                    "name": "Bojonegoro",
                    "latitude": "-7.15020000",
                    "longitude": "111.88170000"
                },
                {
                    "id": 56228,
                    "name": "Bondowoso",
                    "latitude": "-7.91346000",
                    "longitude": "113.82145000"
                },
                {
                    "id": 56231,
                    "name": "Boyolangu",
                    "latitude": "-8.11810000",
                    "longitude": "111.89350000"
                },
                {
                    "id": 56233,
                    "name": "Buduran",
                    "latitude": "-7.42810000",
                    "longitude": "112.72340000"
                },
                {
                    "id": 56259,
                    "name": "Dampit",
                    "latitude": "-8.21162000",
                    "longitude": "112.74934000"
                },
                {
                    "id": 56266,
                    "name": "Diwek",
                    "latitude": "-7.57897000",
                    "longitude": "112.23109000"
                },
                {
                    "id": 56268,
                    "name": "Driyorejo",
                    "latitude": "-7.36590000",
                    "longitude": "112.62190000"
                },
                {
                    "id": 56274,
                    "name": "Gambiran Satu",
                    "latitude": "-8.39390000",
                    "longitude": "114.14640000"
                },
                {
                    "id": 56275,
                    "name": "Gampengrejo",
                    "latitude": "-7.76667000",
                    "longitude": "112.01667000"
                },
                {
                    "id": 56279,
                    "name": "Gedangan",
                    "latitude": "-7.39083000",
                    "longitude": "112.72667000"
                },
                {
                    "id": 56280,
                    "name": "Genteng",
                    "latitude": "-8.36667000",
                    "longitude": "114.15000000"
                },
                {
                    "id": 56284,
                    "name": "Gongdanglegi Kulon",
                    "latitude": "-8.17529000",
                    "longitude": "112.63594000"
                },
                {
                    "id": 56286,
                    "name": "Gresik",
                    "latitude": "-7.15389000",
                    "longitude": "112.65611000"
                },
                {
                    "id": 56287,
                    "name": "Gresik Regency",
                    "latitude": "-7.19330000",
                    "longitude": "112.55300000"
                },
                {
                    "id": 56301,
                    "name": "Jember",
                    "latitude": "-8.17211000",
                    "longitude": "113.69953000"
                },
                {
                    "id": 56304,
                    "name": "Jombang",
                    "latitude": "-7.54595000",
                    "longitude": "112.23307000"
                },
                {
                    "id": 56333,
                    "name": "Kabupaten Bangkalan",
                    "latitude": "-7.05000000",
                    "longitude": "112.93333000"
                },
                {
                    "id": 56340,
                    "name": "Kabupaten Banyuwangi",
                    "latitude": "-8.33333000",
                    "longitude": "114.20000000"
                },
                {
                    "id": 56363,
                    "name": "Kabupaten Blitar",
                    "latitude": "-8.13333000",
                    "longitude": "112.25000000"
                },
                {
                    "id": 56367,
                    "name": "Kabupaten Bojonegoro",
                    "latitude": "-7.25000000",
                    "longitude": "111.80000000"
                },
                {
                    "id": 56373,
                    "name": "Kabupaten Bondowoso",
                    "latitude": "-7.94040000",
                    "longitude": "113.98340000"
                },
                {
                    "id": 56430,
                    "name": "Kabupaten Jember",
                    "latitude": "-8.25000000",
                    "longitude": "113.65000000"
                },
                {
                    "id": 56434,
                    "name": "Kabupaten Jombang",
                    "latitude": "-7.55000000",
                    "longitude": "112.25000000"
                },
                {
                    "id": 56446,
                    "name": "Kabupaten Kediri",
                    "latitude": "-7.83333000",
                    "longitude": "112.16667000"
                },
                {
                    "id": 56483,
                    "name": "Kabupaten Lamongan",
                    "latitude": "-7.13333000",
                    "longitude": "112.31667000"
                },
                {
                    "id": 56500,
                    "name": "Kabupaten Lumajang",
                    "latitude": "-8.11667000",
                    "longitude": "113.15000000"
                },
                {
                    "id": 56504,
                    "name": "Kabupaten Madiun",
                    "latitude": "-7.61667000",
                    "longitude": "111.65000000"
                },
                {
                    "id": 56506,
                    "name": "Kabupaten Magetan",
                    "latitude": "-7.64472000",
                    "longitude": "111.35917000"
                },
                {
                    "id": 56511,
                    "name": "Kabupaten Malang",
                    "latitude": "-8.16667000",
                    "longitude": "112.66667000"
                },
                {
                    "id": 56540,
                    "name": "Kabupaten Mojokerto",
                    "latitude": "-7.55000000",
                    "longitude": "112.50000000"
                },
                {
                    "id": 56557,
                    "name": "Kabupaten Nganjuk",
                    "latitude": "-7.60000000",
                    "longitude": "111.93333000"
                },
                {
                    "id": 56558,
                    "name": "Kabupaten Ngawi",
                    "latitude": "-7.47444000",
                    "longitude": "111.33444000"
                },
                {
                    "id": 56568,
                    "name": "Kabupaten Pacitan",
                    "latitude": "-8.13333000",
                    "longitude": "111.16667000"
                },
                {
                    "id": 56573,
                    "name": "Kabupaten Pamekasan",
                    "latitude": "-7.06667000",
                    "longitude": "113.50000000"
                },
                {
                    "id": 56582,
                    "name": "Kabupaten Pasuruan",
                    "latitude": "-7.73333000",
                    "longitude": "112.83333000"
                },
                {
                    "id": 56597,
                    "name": "Kabupaten Ponorogo",
                    "latitude": "-7.93333000",
                    "longitude": "111.50000000"
                },
                {
                    "id": 56600,
                    "name": "Kabupaten Probolinggo",
                    "latitude": "-7.86667000",
                    "longitude": "113.31667000"
                },
                {
                    "id": 56616,
                    "name": "Kabupaten Sampang",
                    "latitude": "-7.05000000",
                    "longitude": "113.25000000"
                },
                {
                    "id": 56629,
                    "name": "Kabupaten Sidoarjo",
                    "latitude": "-7.45000000",
                    "longitude": "112.70000000"
                },
                {
                    "id": 56636,
                    "name": "Kabupaten Situbondo",
                    "latitude": "-7.71667000",
                    "longitude": "114.05000000"
                },
                {
                    "id": 56655,
                    "name": "Kabupaten Sumenep",
                    "latitude": "-7.11667000",
                    "longitude": "114.33333000"
                },
                {
                    "id": 56685,
                    "name": "Kabupaten Trenggalek",
                    "latitude": "-8.16667000",
                    "longitude": "111.61667000"
                },
                {
                    "id": 56686,
                    "name": "Kabupaten Tuban",
                    "latitude": "-6.96667000",
                    "longitude": "111.90000000"
                },
                {
                    "id": 56688,
                    "name": "Kabupaten Tulungagung",
                    "latitude": "-8.11667000",
                    "longitude": "111.91667000"
                },
                {
                    "id": 56696,
                    "name": "Kalianget",
                    "latitude": "-7.05370000",
                    "longitude": "113.94244000"
                },
                {
                    "id": 56697,
                    "name": "Kamal",
                    "latitude": "-7.16778000",
                    "longitude": "112.71917000"
                },
                {
                    "id": 56705,
                    "name": "Kebomas",
                    "latitude": "-7.16667000",
                    "longitude": "112.63330000"
                },
                {
                    "id": 56707,
                    "name": "Kediri",
                    "latitude": "-7.81667000",
                    "longitude": "112.01667000"
                },
                {
                    "id": 56708,
                    "name": "Kedungwaru",
                    "latitude": "-8.06667000",
                    "longitude": "111.91667000"
                },
                {
                    "id": 56711,
                    "name": "Kencong",
                    "latitude": "-8.28333000",
                    "longitude": "113.36667000"
                },
                {
                    "id": 56713,
                    "name": "Kepanjen",
                    "latitude": "-8.13030000",
                    "longitude": "112.57270000"
                },
                {
                    "id": 56714,
                    "name": "Kertosono",
                    "latitude": "-7.58333000",
                    "longitude": "112.10000000"
                },
                {
                    "id": 56736,
                    "name": "Kota Batu",
                    "latitude": "-7.83272000",
                    "longitude": "112.53751000"
                },
                {
                    "id": 56743,
                    "name": "Kota Blitar",
                    "latitude": "-8.10000000",
                    "longitude": "112.16667000"
                },
                {
                    "id": 56757,
                    "name": "Kota Kediri",
                    "latitude": "-7.83333000",
                    "longitude": "112.01667000"
                },
                {
                    "id": 56764,
                    "name": "Kota Madiun",
                    "latitude": "-7.63333000",
                    "longitude": "111.53333000"
                },
                {
                    "id": 56767,
                    "name": "Kota Malang",
                    "latitude": "-7.97500000",
                    "longitude": "112.63333000"
                },
                {
                    "id": 56772,
                    "name": "Kota Mojokerto",
                    "latitude": "-7.46667000",
                    "longitude": "112.43333000"
                },
                {
                    "id": 56784,
                    "name": "Kota Pasuruan",
                    "latitude": "-7.65000000",
                    "longitude": "112.90000000"
                },
                {
                    "id": 56790,
                    "name": "Kota Probolinggo",
                    "latitude": "-7.78333000",
                    "longitude": "113.21667000"
                },
                {
                    "id": 56803,
                    "name": "Kota Surabaya",
                    "latitude": "-7.26667000",
                    "longitude": "112.71667000"
                },
                {
                    "id": 56818,
                    "name": "Kraksaan",
                    "latitude": "-7.75845000",
                    "longitude": "113.39624000"
                },
                {
                    "id": 56820,
                    "name": "Krian",
                    "latitude": "-7.41040000",
                    "longitude": "112.57920000"
                },
                {
                    "id": 56836,
                    "name": "Lamongan",
                    "latitude": "-7.11667000",
                    "longitude": "112.41667000"
                },
                {
                    "id": 56839,
                    "name": "Lawang",
                    "latitude": "-7.83530000",
                    "longitude": "112.69470000"
                },
                {
                    "id": 56848,
                    "name": "Lumajang",
                    "latitude": "-8.13350000",
                    "longitude": "113.22480000"
                },
                {
                    "id": 56850,
                    "name": "Madiun",
                    "latitude": "-7.62980000",
                    "longitude": "111.52390000"
                },
                {
                    "id": 56856,
                    "name": "Malang",
                    "latitude": "-7.97970000",
                    "longitude": "112.63040000"
                },
                {
                    "id": 56874,
                    "name": "Mojoagung",
                    "latitude": "-7.56667000",
                    "longitude": "112.35000000"
                },
                {
                    "id": 56875,
                    "name": "Mojokerto",
                    "latitude": "-7.46640000",
                    "longitude": "112.43380000"
                },
                {
                    "id": 56878,
                    "name": "Muncar",
                    "latitude": "-8.43333000",
                    "longitude": "114.33333000"
                },
                {
                    "id": 56885,
                    "name": "Nganjuk",
                    "latitude": "-7.60510000",
                    "longitude": "111.90350000"
                },
                {
                    "id": 56888,
                    "name": "Ngoro",
                    "latitude": "-7.68386000",
                    "longitude": "112.25804000"
                },
                {
                    "id": 56889,
                    "name": "Ngunut",
                    "latitude": "-8.10580000",
                    "longitude": "112.01591000"
                },
                {
                    "id": 56891,
                    "name": "Paciran",
                    "latitude": "-6.87666000",
                    "longitude": "112.37606000"
                },
                {
                    "id": 56896,
                    "name": "Pakisaji",
                    "latitude": "-8.06650000",
                    "longitude": "112.59810000"
                },
                {
                    "id": 56903,
                    "name": "Pamekasan",
                    "latitude": "-7.15680000",
                    "longitude": "113.47460000"
                },
                {
                    "id": 56906,
                    "name": "Panarukan",
                    "latitude": "-7.70181000",
                    "longitude": "113.91844000"
                },
                {
                    "id": 56907,
                    "name": "Pandaan",
                    "latitude": "-7.65268000",
                    "longitude": "112.68750000"
                },
                {
                    "id": 56913,
                    "name": "Panji",
                    "latitude": "-7.72528000",
                    "longitude": "114.09954000"
                },
                {
                    "id": 56915,
                    "name": "Pare",
                    "latitude": "-7.76790000",
                    "longitude": "112.19800000"
                },
                {
                    "id": 56921,
                    "name": "Pasuruan",
                    "latitude": "-7.64530000",
                    "longitude": "112.90750000"
                },
                {
                    "id": 56936,
                    "name": "Ponorogo",
                    "latitude": "-7.86850000",
                    "longitude": "111.46200000"
                },
                {
                    "id": 56941,
                    "name": "Prigen",
                    "latitude": "-7.68333000",
                    "longitude": "112.61667000"
                },
                {
                    "id": 56942,
                    "name": "Probolinggo",
                    "latitude": "-7.75430000",
                    "longitude": "113.21590000"
                },
                {
                    "id": 56960,
                    "name": "Sampang",
                    "latitude": "-7.18720000",
                    "longitude": "113.23940000"
                },
                {
                    "id": 56975,
                    "name": "Sidoarjo",
                    "latitude": "-7.44780000",
                    "longitude": "112.71830000"
                },
                {
                    "id": 56983,
                    "name": "Singojuruh",
                    "latitude": "-8.31667000",
                    "longitude": "114.23333000"
                },
                {
                    "id": 56984,
                    "name": "Singosari",
                    "latitude": "-7.89240000",
                    "longitude": "112.66580000"
                },
                {
                    "id": 56986,
                    "name": "Situbondo",
                    "latitude": "-7.70623000",
                    "longitude": "114.00976000"
                },
                {
                    "id": 56992,
                    "name": "Soko",
                    "latitude": "-7.48315000",
                    "longitude": "112.42704000"
                },
                {
                    "id": 56999,
                    "name": "Srono",
                    "latitude": "-8.40003000",
                    "longitude": "114.26661000"
                },
                {
                    "id": 57004,
                    "name": "Sumberpucung",
                    "latitude": "-8.15856000",
                    "longitude": "112.48292000"
                },
                {
                    "id": 57007,
                    "name": "Sumenep",
                    "latitude": "-7.01667000",
                    "longitude": "113.86667000"
                },
                {
                    "id": 57011,
                    "name": "Surabaya",
                    "latitude": "-7.24917000",
                    "longitude": "112.75083000"
                },
                {
                    "id": 57015,
                    "name": "Tanggul",
                    "latitude": "-8.16450000",
                    "longitude": "113.45250000"
                },
                {
                    "id": 57016,
                    "name": "Tanggulangin",
                    "latitude": "-7.49958000",
                    "longitude": "112.69992000"
                },
                {
                    "id": 57039,
                    "name": "Trenggalek",
                    "latitude": "-8.07640000",
                    "longitude": "111.70641000"
                },
                {
                    "id": 57042,
                    "name": "Tuban",
                    "latitude": "-6.89760000",
                    "longitude": "112.06490000"
                },
                {
                    "id": 57044,
                    "name": "Tulangan Utara",
                    "latitude": "-7.47370000",
                    "longitude": "112.65050000"
                },
                {
                    "id": 57045,
                    "name": "Tulungagung",
                    "latitude": "-8.06570000",
                    "longitude": "111.90250000"
                },
                {
                    "id": 57058,
                    "name": "Wongsorejo",
                    "latitude": "-7.99080000",
                    "longitude": "114.40090000"
                }
            ]
        },
        {
            "id": 1804,
            "name": "East Kalimantan",
            "state_code": "KI",
            "cities": [
                {
                    "id": 56190,
                    "name": "Balikpapan",
                    "latitude": "-1.26753000",
                    "longitude": "116.82887000"
                },
                {
                    "id": 56229,
                    "name": "Bontang",
                    "latitude": "0.13240000",
                    "longitude": "117.48540000"
                },
                {
                    "id": 56254,
                    "name": "City of Balikpapan",
                    "latitude": "-1.24204000",
                    "longitude": "116.89419000"
                },
                {
                    "id": 56358,
                    "name": "Kabupaten Berau",
                    "latitude": "2.00000000",
                    "longitude": "117.30000000"
                },
                {
                    "id": 56476,
                    "name": "Kabupaten Kutai Barat",
                    "latitude": "-0.59417000",
                    "longitude": "115.51575000"
                },
                {
                    "id": 56477,
                    "name": "Kabupaten Kutai Kartanegara",
                    "latitude": "-0.44019000",
                    "longitude": "116.98139000"
                },
                {
                    "id": 56478,
                    "name": "Kabupaten Kutai Timur",
                    "latitude": "1.03769000",
                    "longitude": "117.83112000"
                },
                {
                    "id": 56507,
                    "name": "Kabupaten Mahakam Hulu",
                    "latitude": "0.37822000",
                    "longitude": "115.38048000"
                },
                {
                    "id": 56581,
                    "name": "Kabupaten Paser",
                    "latitude": "-1.43517000",
                    "longitude": "116.23535000"
                },
                {
                    "id": 56588,
                    "name": "Kabupaten Penajam Paser Utara",
                    "latitude": "-1.25000000",
                    "longitude": "116.83333000"
                },
                {
                    "id": 56728,
                    "name": "Kota Balikpapan",
                    "latitude": "-1.16667000",
                    "longitude": "116.88333000"
                },
                {
                    "id": 56745,
                    "name": "Kota Bontang",
                    "latitude": "0.12526000",
                    "longitude": "117.49603000"
                },
                {
                    "id": 56793,
                    "name": "Kota Samarinda",
                    "latitude": "-0.43333000",
                    "longitude": "117.18333000"
                },
                {
                    "id": 56845,
                    "name": "Loa Janan",
                    "latitude": "-0.58295000",
                    "longitude": "117.09503000"
                },
                {
                    "id": 56959,
                    "name": "Samarinda",
                    "latitude": "-0.49167000",
                    "longitude": "117.14583000"
                }
            ]
        },
        {
            "id": 1818,
            "name": "East Nusa Tenggara",
            "state_code": "NT",
            "cities": [
                {
                    "id": 56184,
                    "name": "Atambua",
                    "latitude": "-9.10611000",
                    "longitude": "124.89250000"
                },
                {
                    "id": 56272,
                    "name": "Ende",
                    "latitude": "-8.84320000",
                    "longitude": "121.66230000"
                },
                {
                    "id": 56319,
                    "name": "Kabupaten Alor",
                    "latitude": "-8.30000000",
                    "longitude": "124.56667000"
                },
                {
                    "id": 56352,
                    "name": "Kabupaten Belu",
                    "latitude": "-9.41258000",
                    "longitude": "124.95066000"
                },
                {
                    "id": 56403,
                    "name": "Kabupaten Ende",
                    "latitude": "-8.84056000",
                    "longitude": "121.66389000"
                },
                {
                    "id": 56406,
                    "name": "Kabupaten Flores Timur",
                    "latitude": "-8.24224000",
                    "longitude": "122.96817000"
                },
                {
                    "id": 56475,
                    "name": "Kabupaten Kupang",
                    "latitude": "-9.91667000",
                    "longitude": "123.83333000"
                },
                {
                    "id": 56493,
                    "name": "Kabupaten Lembata",
                    "latitude": "-8.41396000",
                    "longitude": "123.55225000"
                },
                {
                    "id": 56510,
                    "name": "Kabupaten Malaka",
                    "latitude": "-9.56320000",
                    "longitude": "124.89481000"
                },
                {
                    "id": 56524,
                    "name": "Kabupaten Manggarai",
                    "latitude": "-8.56667000",
                    "longitude": "120.41667000"
                },
                {
                    "id": 56525,
                    "name": "Kabupaten Manggarai Barat",
                    "latitude": "-8.64484000",
                    "longitude": "119.88281000"
                },
                {
                    "id": 56526,
                    "name": "Kabupaten Manggarai Timur",
                    "latitude": "-8.55533000",
                    "longitude": "120.59761000"
                },
                {
                    "id": 56553,
                    "name": "Kabupaten Nagekeo",
                    "latitude": "-8.87210000",
                    "longitude": "121.20963000"
                },
                {
                    "id": 56556,
                    "name": "Kabupaten Ngada",
                    "latitude": "-8.66667000",
                    "longitude": "121.00000000"
                },
                {
                    "id": 56613,
                    "name": "Kabupaten Rote Ndao",
                    "latitude": "-10.73617000",
                    "longitude": "123.12054000"
                },
                {
                    "id": 56614,
                    "name": "Kabupaten Sabu Raijua",
                    "latitude": "-10.56286000",
                    "longitude": "121.78894000"
                },
                {
                    "id": 56632,
                    "name": "Kabupaten Sikka",
                    "latitude": "-8.66667000",
                    "longitude": "122.36667000"
                },
                {
                    "id": 56648,
                    "name": "Kabupaten Sumba Barat",
                    "latitude": "-9.56667000",
                    "longitude": "119.45000000"
                },
                {
                    "id": 56649,
                    "name": "Kabupaten Sumba Barat Daya",
                    "latitude": "-9.56216000",
                    "longitude": "119.08905000"
                },
                {
                    "id": 56650,
                    "name": "Kabupaten Sumba Tengah",
                    "latitude": "-9.62941000",
                    "longitude": "119.61914000"
                },
                {
                    "id": 56651,
                    "name": "Kabupaten Sumba Timur",
                    "latitude": "-9.88333000",
                    "longitude": "120.25000000"
                },
                {
                    "id": 56680,
                    "name": "Kabupaten Timor Tengah Selatan",
                    "latitude": "-9.83333000",
                    "longitude": "124.40000000"
                },
                {
                    "id": 56681,
                    "name": "Kabupaten Timor Tengah Utara",
                    "latitude": "-9.33136000",
                    "longitude": "124.51904000"
                },
                {
                    "id": 56710,
                    "name": "Kefamenanu",
                    "latitude": "-9.44667000",
                    "longitude": "124.47806000"
                },
                {
                    "id": 56721,
                    "name": "Komodo",
                    "latitude": "-8.58950000",
                    "longitude": "119.49130000"
                },
                {
                    "id": 56760,
                    "name": "Kota Kupang",
                    "latitude": "-10.21667000",
                    "longitude": "123.60000000"
                },
                {
                    "id": 56826,
                    "name": "Kupang",
                    "latitude": "-10.17083000",
                    "longitude": "123.60694000"
                },
                {
                    "id": 56830,
                    "name": "Labuan Bajo",
                    "latitude": "-8.49640000",
                    "longitude": "119.88770000"
                },
                {
                    "id": 56866,
                    "name": "Maumere",
                    "latitude": "-8.61990000",
                    "longitude": "122.21110000"
                },
                {
                    "id": 56883,
                    "name": "Naisano Dua",
                    "latitude": "-9.59806000",
                    "longitude": "123.77028000"
                },
                {
                    "id": 56956,
                    "name": "Ruteng",
                    "latitude": "-8.61139000",
                    "longitude": "120.46444000"
                },
                {
                    "id": 56989,
                    "name": "Soe",
                    "latitude": "-9.86071000",
                    "longitude": "124.28395000"
                },
                {
                    "id": 57048,
                    "name": "Waingapu",
                    "latitude": "-9.65670000",
                    "longitude": "120.26410000"
                }
            ]
        },
        {
            "id": 1812,
            "name": "Gorontalo",
            "state_code": "GO",
            "cities": [
                {
                    "id": 56285,
                    "name": "Gorontalo",
                    "latitude": "0.53750000",
                    "longitude": "123.06250000"
                },
                {
                    "id": 56365,
                    "name": "Kabupaten Boalemo",
                    "latitude": "0.62689000",
                    "longitude": "122.35680000"
                },
                {
                    "id": 56375,
                    "name": "Kabupaten Bone Bolango",
                    "latitude": "0.50296000",
                    "longitude": "123.27501000"
                },
                {
                    "id": 56410,
                    "name": "Kabupaten Gorontalo",
                    "latitude": "0.57280000",
                    "longitude": "122.23370000"
                },
                {
                    "id": 56411,
                    "name": "Kabupaten Gorontalo Utara",
                    "latitude": "0.77000000",
                    "longitude": "122.31667000"
                },
                {
                    "id": 56595,
                    "name": "Kabupaten Pohuwato",
                    "latitude": "0.70980000",
                    "longitude": "121.59582000"
                },
                {
                    "id": 56753,
                    "name": "Kota Gorontalo",
                    "latitude": "0.53333000",
                    "longitude": "123.10000000"
                }
            ]
        },
        {
            "id": 1805,
            "name": "Jakarta",
            "state_code": "JK",
            "cities": [
                {
                    "id": 56293,
                    "name": "Jakarta",
                    "latitude": "-6.21462000",
                    "longitude": "106.84513000"
                },
                {
                    "id": 56722,
                    "name": "Kota Administrasi Jakarta Barat",
                    "latitude": "-6.16760000",
                    "longitude": "106.76730000"
                },
                {
                    "id": 56723,
                    "name": "Kota Administrasi Jakarta Pusat",
                    "latitude": "-6.17770000",
                    "longitude": "106.84030000"
                },
                {
                    "id": 56724,
                    "name": "Kota Administrasi Jakarta Selatan",
                    "latitude": "-6.26600000",
                    "longitude": "106.81350000"
                },
                {
                    "id": 56725,
                    "name": "Kota Administrasi Jakarta Timur",
                    "latitude": "-6.25210000",
                    "longitude": "106.88400000"
                },
                {
                    "id": 56726,
                    "name": "Kota Administrasi Jakarta Utara",
                    "latitude": "-6.13390000",
                    "longitude": "106.88230000"
                }
            ]
        },
        {
            "id": 1815,
            "name": "Jambi",
            "state_code": "JA",
            "cities": [
                {
                    "id": 56214,
                    "name": "Bejubang Dua",
                    "latitude": "-1.79230000",
                    "longitude": "103.31670000"
                },
                {
                    "id": 56294,
                    "name": "Jambi City",
                    "latitude": "-1.60000000",
                    "longitude": "103.61667000"
                },
                {
                    "id": 56347,
                    "name": "Kabupaten Batang Hari",
                    "latitude": "-1.75000000",
                    "longitude": "103.11667000"
                },
                {
                    "id": 56382,
                    "name": "Kabupaten Bungo",
                    "latitude": "-1.50222000",
                    "longitude": "101.96000000"
                },
                {
                    "id": 56458,
                    "name": "Kabupaten Kerinci",
                    "latitude": "-2.03333000",
                    "longitude": "101.53333000"
                },
                {
                    "id": 56532,
                    "name": "Kabupaten Merangin",
                    "latitude": "-2.06933000",
                    "longitude": "102.13303000"
                },
                {
                    "id": 56543,
                    "name": "Kabupaten Muaro Jambi",
                    "latitude": "-1.55214000",
                    "longitude": "103.82163000"
                },
                {
                    "id": 56618,
                    "name": "Kabupaten Sarolangun",
                    "latitude": "-2.30000000",
                    "longitude": "102.65000000"
                },
                {
                    "id": 56668,
                    "name": "Kabupaten Tanjung Jabung Barat",
                    "latitude": "-1.15440000",
                    "longitude": "103.24402000"
                },
                {
                    "id": 56669,
                    "name": "Kabupaten Tanjung Jabung Timur",
                    "latitude": "-1.13198000",
                    "longitude": "103.61755000"
                },
                {
                    "id": 56675,
                    "name": "Kabupaten Tebo",
                    "latitude": "-1.45576000",
                    "longitude": "102.37473000"
                },
                {
                    "id": 56755,
                    "name": "Kota Jambi",
                    "latitude": "-1.61667000",
                    "longitude": "103.65000000"
                },
                {
                    "id": 56802,
                    "name": "Kota Sungai Penuh",
                    "latitude": "-2.10896000",
                    "longitude": "101.32175000"
                },
                {
                    "id": 56822,
                    "name": "Kuala Tungkal",
                    "latitude": "-0.81623000",
                    "longitude": "103.46111000"
                },
                {
                    "id": 56869,
                    "name": "Mendaha",
                    "latitude": "-1.01630000",
                    "longitude": "103.59331000"
                },
                {
                    "id": 56978,
                    "name": "Simpang",
                    "latitude": "-1.26424000",
                    "longitude": "104.09701000"
                },
                {
                    "id": 57008,
                    "name": "Sungai Penuh",
                    "latitude": "-2.05610000",
                    "longitude": "101.39130000"
                }
            ]
        },
        {
            "id": 1806,
            "name": "Kalimantan",
            "state_code": "KA",
            "cities": []
        },
        {
            "id": 1811,
            "name": "Lampung",
            "state_code": "LA",
            "cities": [
                {
                    "id": 56195,
                    "name": "Bandar Lampung",
                    "latitude": "-5.42917000",
                    "longitude": "105.26111000"
                },
                {
                    "id": 56484,
                    "name": "Kabupaten Lampung Barat",
                    "latitude": "-5.14904000",
                    "longitude": "104.19309000"
                },
                {
                    "id": 56485,
                    "name": "Kabupaten Lampung Selatan",
                    "latitude": "-5.45310000",
                    "longitude": "104.98770000"
                },
                {
                    "id": 56486,
                    "name": "Kabupaten Lampung Tengah",
                    "latitude": "-4.86667000",
                    "longitude": "105.26667000"
                },
                {
                    "id": 56487,
                    "name": "Kabupaten Lampung Timur",
                    "latitude": "-5.10273000",
                    "longitude": "105.68003000"
                },
                {
                    "id": 56488,
                    "name": "Kabupaten Lampung Utara",
                    "latitude": "-4.81667000",
                    "longitude": "104.80000000"
                },
                {
                    "id": 56534,
                    "name": "Kabupaten Mesuji",
                    "latitude": "-4.04390000",
                    "longitude": "105.40130000"
                },
                {
                    "id": 56590,
                    "name": "Kabupaten Pesawaran",
                    "latitude": "-5.42980000",
                    "longitude": "105.17899000"
                },
                {
                    "id": 56591,
                    "name": "Kabupaten Pesisir Barat",
                    "latitude": "-5.19323000",
                    "longitude": "103.93976000"
                },
                {
                    "id": 56599,
                    "name": "Kabupaten Pringsewu",
                    "latitude": "-5.42211000",
                    "longitude": "104.93454000"
                },
                {
                    "id": 56667,
                    "name": "Kabupaten Tanggamus",
                    "latitude": "-5.38508000",
                    "longitude": "104.62349000"
                },
                {
                    "id": 56687,
                    "name": "Kabupaten Tulangbawang",
                    "latitude": "-4.20604000",
                    "longitude": "105.57999000"
                },
                {
                    "id": 56691,
                    "name": "Kabupaten Way Kanan",
                    "latitude": "-4.44705000",
                    "longitude": "104.52753000"
                },
                {
                    "id": 56730,
                    "name": "Kota Bandar Lampung",
                    "latitude": "-5.41667000",
                    "longitude": "105.25000000"
                },
                {
                    "id": 56771,
                    "name": "Kota Metro",
                    "latitude": "-5.11856000",
                    "longitude": "105.29949000"
                },
                {
                    "id": 56817,
                    "name": "Kotabumi",
                    "latitude": "-4.82505000",
                    "longitude": "104.88170000"
                },
                {
                    "id": 56871,
                    "name": "Metro",
                    "latitude": "-5.11306000",
                    "longitude": "105.30667000"
                },
                {
                    "id": 57031,
                    "name": "Terbanggi Besar",
                    "latitude": "-4.87898000",
                    "longitude": "105.21818000"
                }
            ]
        },
        {
            "id": 1821,
            "name": "Lesser Sunda Islands",
            "state_code": "NU",
            "cities": []
        },
        {
            "id": 1800,
            "name": "Maluku",
            "state_code": "MA",
            "cities": [
                {
                    "id": 56175,
                    "name": "Amahai",
                    "latitude": "-3.33984000",
                    "longitude": "128.91975000"
                },
                {
                    "id": 56178,
                    "name": "Ambon",
                    "latitude": "-3.69583000",
                    "longitude": "128.18333000"
                },
                {
                    "id": 56384,
                    "name": "Kabupaten Buru",
                    "latitude": "-3.32767000",
                    "longitude": "126.68413000"
                },
                {
                    "id": 56385,
                    "name": "Kabupaten Buru Selatan",
                    "latitude": "-3.52187000",
                    "longitude": "126.59271000"
                },
                {
                    "id": 56451,
                    "name": "Kabupaten Kepulauan Aru",
                    "latitude": "-6.17059000",
                    "longitude": "134.46991000"
                },
                {
                    "id": 56513,
                    "name": "Kabupaten Maluku Barat Daya",
                    "latitude": "-7.82960000",
                    "longitude": "126.17386000"
                },
                {
                    "id": 56514,
                    "name": "Kabupaten Maluku Tengah",
                    "latitude": "-3.29167000",
                    "longitude": "128.96750000"
                },
                {
                    "id": 56515,
                    "name": "Kabupaten Maluku Tenggara",
                    "latitude": "-5.75000000",
                    "longitude": "132.73333000"
                },
                {
                    "id": 56516,
                    "name": "Kabupaten Maluku Tenggara Barat",
                    "latitude": "-7.61186000",
                    "longitude": "131.38000000"
                },
                {
                    "id": 56621,
                    "name": "Kabupaten Seram Bagian Barat",
                    "latitude": "-3.10270000",
                    "longitude": "128.42996000"
                },
                {
                    "id": 56622,
                    "name": "Kabupaten Seram Bagian Timur",
                    "latitude": "-3.39851000",
                    "longitude": "130.39167000"
                },
                {
                    "id": 56727,
                    "name": "Kota Ambon",
                    "latitude": "-3.70000000",
                    "longitude": "128.18333000"
                },
                {
                    "id": 56815,
                    "name": "Kota Tual",
                    "latitude": "-5.64301000",
                    "longitude": "132.74935000"
                },
                {
                    "id": 57041,
                    "name": "Tual",
                    "latitude": "-5.62878000",
                    "longitude": "132.75229000"
                }
            ]
        },
        {
            "id": 1823,
            "name": "Maluku Islands",
            "state_code": "ML",
            "cities": []
        },
        {
            "id": 1824,
            "name": "North Kalimantan",
            "state_code": "KU",
            "cities": [
                {
                    "id": 56381,
                    "name": "Kabupaten Bulungan",
                    "latitude": "3.00000000",
                    "longitude": "117.16667000"
                },
                {
                    "id": 56512,
                    "name": "Kabupaten Malinau",
                    "latitude": "2.45000000",
                    "longitude": "115.68333000"
                },
                {
                    "id": 56562,
                    "name": "Kabupaten Nunukan",
                    "latitude": "4.13333000",
                    "longitude": "116.70000000"
                },
                {
                    "id": 56661,
                    "name": "Kabupaten Tana Tidung",
                    "latitude": "3.55000000",
                    "longitude": "117.25000000"
                },
                {
                    "id": 57019,
                    "name": "Tanjung Selor",
                    "latitude": "2.83750000",
                    "longitude": "117.36528000"
                },
                {
                    "id": 57023,
                    "name": "Tarakan",
                    "latitude": "3.31332000",
                    "longitude": "117.59152000"
                }
            ]
        },
        {
            "id": 1801,
            "name": "North Maluku",
            "state_code": "MU",
            "cities": [
                {
                    "id": 56271,
                    "name": "East Halmahera Regency",
                    "latitude": "1.33517000",
                    "longitude": "128.48627000"
                },
                {
                    "id": 56416,
                    "name": "Kabupaten Halmahera Barat",
                    "latitude": "1.41709000",
                    "longitude": "127.55264000"
                },
                {
                    "id": 56417,
                    "name": "Kabupaten Halmahera Selatan",
                    "latitude": "-0.39550000",
                    "longitude": "127.90833000"
                },
                {
                    "id": 56418,
                    "name": "Kabupaten Halmahera Tengah",
                    "latitude": "0.48056000",
                    "longitude": "128.25000000"
                },
                {
                    "id": 56419,
                    "name": "Kabupaten Halmahera Utara",
                    "latitude": "1.73194000",
                    "longitude": "128.00778000"
                },
                {
                    "id": 56455,
                    "name": "Kabupaten Kepulauan Sula",
                    "latitude": "-1.86460000",
                    "longitude": "125.69046000"
                },
                {
                    "id": 56602,
                    "name": "Kabupaten Pulau Morotai",
                    "latitude": "2.19924000",
                    "longitude": "128.40546000"
                },
                {
                    "id": 56603,
                    "name": "Kabupaten Pulau Taliabu",
                    "latitude": "-1.84578000",
                    "longitude": "124.78992000"
                },
                {
                    "id": 56812,
                    "name": "Kota Ternate",
                    "latitude": "0.89618000",
                    "longitude": "127.31016000"
                },
                {
                    "id": 56813,
                    "name": "Kota Tidore Kepulauan",
                    "latitude": "0.60962000",
                    "longitude": "127.56981000"
                },
                {
                    "id": 56990,
                    "name": "Sofifi",
                    "latitude": "0.73729000",
                    "longitude": "127.55880000"
                },
                {
                    "id": 57032,
                    "name": "Ternate",
                    "latitude": "0.79065000",
                    "longitude": "127.38424000"
                },
                {
                    "id": 57033,
                    "name": "Tobelo",
                    "latitude": "1.72837000",
                    "longitude": "128.00948000"
                }
            ]
        },
        {
            "id": 1808,
            "name": "North Sulawesi",
            "state_code": "SA",
            "cities": [
                {
                    "id": 56368,
                    "name": "Kabupaten Bolaang Mongondow",
                    "latitude": "0.75000000",
                    "longitude": "124.08333000"
                },
                {
                    "id": 56369,
                    "name": "Kabupaten Bolaang Mongondow Selatan",
                    "latitude": "0.40912000",
                    "longitude": "123.75961000"
                },
                {
                    "id": 56370,
                    "name": "Kabupaten Bolaang Mongondow Timur",
                    "latitude": "0.72073000",
                    "longitude": "124.50256000"
                },
                {
                    "id": 56371,
                    "name": "Kabupaten Bolaang Mongondow Utara",
                    "latitude": "0.78527000",
                    "longitude": "123.41766000"
                },
                {
                    "id": 56454,
                    "name": "Kabupaten Kepulauan Sangihe",
                    "latitude": "3.50000000",
                    "longitude": "125.55000000"
                },
                {
                    "id": 56456,
                    "name": "Kabupaten Kepulauan Talaud",
                    "latitude": "4.31178000",
                    "longitude": "126.78085000"
                },
                {
                    "id": 56536,
                    "name": "Kabupaten Minahasa",
                    "latitude": "1.25370000",
                    "longitude": "124.83000000"
                },
                {
                    "id": 56537,
                    "name": "Kabupaten Minahasa Selatan",
                    "latitude": "1.21291000",
                    "longitude": "124.59708000"
                },
                {
                    "id": 56538,
                    "name": "Kabupaten Minahasa Tenggara",
                    "latitude": "1.05633000",
                    "longitude": "124.79250000"
                },
                {
                    "id": 56539,
                    "name": "Kabupaten Minahasa Utara",
                    "latitude": "1.40250000",
                    "longitude": "124.96000000"
                },
                {
                    "id": 56627,
                    "name": "Kabupaten Siau Tagulandang Biaro",
                    "latitude": "2.11728000",
                    "longitude": "125.37512000"
                },
                {
                    "id": 56742,
                    "name": "Kota Bitung",
                    "latitude": "1.48333000",
                    "longitude": "125.15000000"
                },
                {
                    "id": 56759,
                    "name": "Kota Kotamobagu",
                    "latitude": "0.68915000",
                    "longitude": "124.32678000"
                },
                {
                    "id": 56768,
                    "name": "Kota Manado",
                    "latitude": "1.51667000",
                    "longitude": "124.88333000"
                },
                {
                    "id": 56814,
                    "name": "Kota Tomohon",
                    "latitude": "1.31307000",
                    "longitude": "124.83404000"
                },
                {
                    "id": 56835,
                    "name": "Laikit, Laikit II (Dimembe)",
                    "latitude": "1.48833000",
                    "longitude": "124.97444000"
                },
                {
                    "id": 56858,
                    "name": "Manado",
                    "latitude": "1.48218000",
                    "longitude": "124.84892000"
                },
                {
                    "id": 57035,
                    "name": "Tomohon",
                    "latitude": "1.31678000",
                    "longitude": "124.80379000"
                },
                {
                    "id": 57037,
                    "name": "Tondano",
                    "latitude": "1.30540000",
                    "longitude": "124.91261000"
                }
            ]
        },
        {
            "id": 1792,
            "name": "North Sumatra",
            "state_code": "SU",
            "cities": [
                {
                    "id": 56177,
                    "name": "Ambarita",
                    "latitude": "2.68140000",
                    "longitude": "98.83110000"
                },
                {
                    "id": 56194,
                    "name": "Bandar",
                    "latitude": "2.05000000",
                    "longitude": "99.75000000"
                },
                {
                    "id": 56216,
                    "name": "Belawan",
                    "latitude": "3.77550000",
                    "longitude": "98.68320000"
                },
                {
                    "id": 56218,
                    "name": "Berastagi",
                    "latitude": "3.19468000",
                    "longitude": "98.50889000"
                },
                {
                    "id": 56222,
                    "name": "Binjai",
                    "latitude": "3.60010000",
                    "longitude": "98.48540000"
                },
                {
                    "id": 56261,
                    "name": "Deli Tua",
                    "latitude": "3.50780000",
                    "longitude": "98.68390000"
                },
                {
                    "id": 56290,
                    "name": "Gunungsitoli",
                    "latitude": "1.28880000",
                    "longitude": "97.61430000"
                },
                {
                    "id": 56306,
                    "name": "Kabanjahe",
                    "latitude": "3.10010000",
                    "longitude": "98.49080000"
                },
                {
                    "id": 56320,
                    "name": "Kabupaten Asahan",
                    "latitude": "2.78333000",
                    "longitude": "99.55000000"
                },
                {
                    "id": 56348,
                    "name": "Kabupaten Batu Bara",
                    "latitude": "3.16166000",
                    "longitude": "99.52652000"
                },
                {
                    "id": 56394,
                    "name": "Kabupaten Dairi",
                    "latitude": "2.86667000",
                    "longitude": "98.23333000"
                },
                {
                    "id": 56396,
                    "name": "Kabupaten Deli Serdang",
                    "latitude": "3.41667000",
                    "longitude": "98.66667000"
                },
                {
                    "id": 56423,
                    "name": "Kabupaten Humbang Hasundutan",
                    "latitude": "2.26551000",
                    "longitude": "98.50376000"
                },
                {
                    "id": 56442,
                    "name": "Kabupaten Karo",
                    "latitude": "3.11667000",
                    "longitude": "98.30000000"
                },
                {
                    "id": 56479,
                    "name": "Kabupaten Labuhan Batu",
                    "latitude": "2.26667000",
                    "longitude": "100.10000000"
                },
                {
                    "id": 56480,
                    "name": "Kabupaten Labuhan Batu Selatan",
                    "latitude": "1.98300000",
                    "longitude": "100.09760000"
                },
                {
                    "id": 56481,
                    "name": "Kabupaten Labuhan Batu Utara",
                    "latitude": "2.33349000",
                    "longitude": "99.63776000"
                },
                {
                    "id": 56489,
                    "name": "Kabupaten Langkat",
                    "latitude": "3.71667000",
                    "longitude": "98.21667000"
                },
                {
                    "id": 56523,
                    "name": "Kabupaten Mandailing Natal",
                    "latitude": "0.78378000",
                    "longitude": "99.25495000"
                },
                {
                    "id": 56559,
                    "name": "Kabupaten Nias",
                    "latitude": "1.03333000",
                    "longitude": "97.76667000"
                },
                {
                    "id": 56560,
                    "name": "Kabupaten Nias Barat",
                    "latitude": "1.05966000",
                    "longitude": "97.58606000"
                },
                {
                    "id": 56561,
                    "name": "Kabupaten Nias Utara",
                    "latitude": "1.33037000",
                    "longitude": "97.31964000"
                },
                {
                    "id": 56569,
                    "name": "Kabupaten Padang Lawas",
                    "latitude": "1.44684000",
                    "longitude": "99.99207000"
                },
                {
                    "id": 56570,
                    "name": "Kabupaten Padang Lawas Utara",
                    "latitude": "1.46011000",
                    "longitude": "99.67346000"
                },
                {
                    "id": 56572,
                    "name": "Kabupaten Pakpak Bharat",
                    "latitude": "2.56667000",
                    "longitude": "98.28333000"
                },
                {
                    "id": 56615,
                    "name": "Kabupaten Samosir",
                    "latitude": "2.64025000",
                    "longitude": "98.71525000"
                },
                {
                    "id": 56624,
                    "name": "Kabupaten Serdang Bedagai",
                    "latitude": "3.36667000",
                    "longitude": "99.03333000"
                },
                {
                    "id": 56633,
                    "name": "Kabupaten Simalungun",
                    "latitude": "2.90000000",
                    "longitude": "99.00000000"
                },
                {
                    "id": 56670,
                    "name": "Kabupaten Tapanuli Selatan",
                    "latitude": "1.51667000",
                    "longitude": "99.25000000"
                },
                {
                    "id": 56671,
                    "name": "Kabupaten Tapanuli Tengah",
                    "latitude": "1.90000000",
                    "longitude": "98.66667000"
                },
                {
                    "id": 56672,
                    "name": "Kabupaten Tapanuli Utara",
                    "latitude": "2.00280000",
                    "longitude": "99.07070000"
                },
                {
                    "id": 56717,
                    "name": "Kisaran",
                    "latitude": "2.98450000",
                    "longitude": "99.61580000"
                },
                {
                    "id": 56741,
                    "name": "Kota Binjai",
                    "latitude": "3.80000000",
                    "longitude": "108.23333000"
                },
                {
                    "id": 56754,
                    "name": "Kota Gunungsitoli",
                    "latitude": "1.32731000",
                    "longitude": "97.55018000"
                },
                {
                    "id": 56770,
                    "name": "Kota Medan",
                    "latitude": "3.65000000",
                    "longitude": "98.66667000"
                },
                {
                    "id": 56775,
                    "name": "Kota Padangsidimpuan",
                    "latitude": "1.37375000",
                    "longitude": "99.26843000"
                },
                {
                    "id": 56788,
                    "name": "Kota Pematang Siantar",
                    "latitude": "2.96667000",
                    "longitude": "99.05000000"
                },
                {
                    "id": 56797,
                    "name": "Kota Sibolga",
                    "latitude": "1.73333000",
                    "longitude": "98.80000000"
                },
                {
                    "id": 56807,
                    "name": "Kota Tanjung Balai",
                    "latitude": "2.95833000",
                    "longitude": "99.79167000"
                },
                {
                    "id": 56810,
                    "name": "Kota Tebing Tinggi",
                    "latitude": "3.32500000",
                    "longitude": "99.14167000"
                },
                {
                    "id": 56832,
                    "name": "Labuhan Deli",
                    "latitude": "3.72780000",
                    "longitude": "98.67380000"
                },
                {
                    "id": 56867,
                    "name": "Medan",
                    "latitude": "3.58333000",
                    "longitude": "98.66667000"
                },
                {
                    "id": 56894,
                    "name": "Padangsidempuan",
                    "latitude": "1.37952000",
                    "longitude": "99.27146000"
                },
                {
                    "id": 56910,
                    "name": "Pangkalan Brandan",
                    "latitude": "4.02380000",
                    "longitude": "98.27820000"
                },
                {
                    "id": 56914,
                    "name": "Parapat",
                    "latitude": "2.66300000",
                    "longitude": "98.93490000"
                },
                {
                    "id": 56926,
                    "name": "Pekan Bahapal",
                    "latitude": "3.11313000",
                    "longitude": "99.17352000"
                },
                {
                    "id": 56930,
                    "name": "Pematangsiantar",
                    "latitude": "2.95950000",
                    "longitude": "99.06870000"
                },
                {
                    "id": 56932,
                    "name": "Perbaungan",
                    "latitude": "3.56790000",
                    "longitude": "98.95600000"
                },
                {
                    "id": 56933,
                    "name": "Percut",
                    "latitude": "3.62530000",
                    "longitude": "98.86400000"
                },
                {
                    "id": 56951,
                    "name": "Rantauprapat",
                    "latitude": "2.10000000",
                    "longitude": "99.83333000"
                },
                {
                    "id": 56973,
                    "name": "Sibolga",
                    "latitude": "1.74016000",
                    "longitude": "98.78117000"
                },
                {
                    "id": 57000,
                    "name": "Stabat",
                    "latitude": "3.73335000",
                    "longitude": "98.45025000"
                },
                {
                    "id": 57010,
                    "name": "Sunggal",
                    "latitude": "3.57650000",
                    "longitude": "98.61510000"
                },
                {
                    "id": 57021,
                    "name": "Tanjungbalai",
                    "latitude": "2.96667000",
                    "longitude": "99.80000000"
                },
                {
                    "id": 57022,
                    "name": "Tanjungtiram",
                    "latitude": "4.06130000",
                    "longitude": "98.36990000"
                },
                {
                    "id": 57027,
                    "name": "Tebingtinggi",
                    "latitude": "3.32850000",
                    "longitude": "99.16250000"
                },
                {
                    "id": 57029,
                    "name": "Teluk Nibung",
                    "latitude": "3.00100000",
                    "longitude": "99.81640000"
                },
                {
                    "id": 57036,
                    "name": "Tomok Bolon",
                    "latitude": "2.65210000",
                    "longitude": "98.86080000"
                },
                {
                    "id": 57038,
                    "name": "Tongging",
                    "latitude": "2.89850000",
                    "longitude": "98.52310000"
                },
                {
                    "id": 57043,
                    "name": "Tuktuk Sonak",
                    "latitude": "2.66890000",
                    "longitude": "98.85760000"
                }
            ]
        },
        {
            "id": 1798,
            "name": "Papua",
            "state_code": "PA",
            "cities": [
                {
                    "id": 56173,
                    "name": "Abepura",
                    "latitude": "-2.59640000",
                    "longitude": "140.63240000"
                },
                {
                    "id": 56220,
                    "name": "Biak",
                    "latitude": "-1.17670000",
                    "longitude": "136.08200000"
                },
                {
                    "id": 56292,
                    "name": "Insrom",
                    "latitude": "-1.14473000",
                    "longitude": "136.03134000"
                },
                {
                    "id": 56299,
                    "name": "Jayapura",
                    "latitude": "-2.53371000",
                    "longitude": "140.71813000"
                },
                {
                    "id": 56321,
                    "name": "Kabupaten Asmat",
                    "latitude": "-5.37950000",
                    "longitude": "138.46344000"
                },
                {
                    "id": 56359,
                    "name": "Kabupaten Biak Numfor",
                    "latitude": "-1.03333000",
                    "longitude": "136.00000000"
                },
                {
                    "id": 56376,
                    "name": "Kabupaten Boven Digoel",
                    "latitude": "-5.70519000",
                    "longitude": "140.36349000"
                },
                {
                    "id": 56395,
                    "name": "Kabupaten Deiyai",
                    "latitude": "-3.94737000",
                    "longitude": "135.95032000"
                },
                {
                    "id": 56399,
                    "name": "Kabupaten Dogiyai",
                    "latitude": "-4.03186000",
                    "longitude": "135.43945000"
                },
                {
                    "id": 56427,
                    "name": "Kabupaten Intan Jaya",
                    "latitude": "-3.41016000",
                    "longitude": "136.70837000"
                },
                {
                    "id": 56428,
                    "name": "Kabupaten Jayapura",
                    "latitude": "-3.00000000",
                    "longitude": "139.95000000"
                },
                {
                    "id": 56429,
                    "name": "Kabupaten Jayawijaya",
                    "latitude": "-4.08333000",
                    "longitude": "139.08333000"
                },
                {
                    "id": 56447,
                    "name": "Kabupaten Keerom",
                    "latitude": "-3.30000000",
                    "longitude": "140.61667000"
                },
                {
                    "id": 56457,
                    "name": "Kabupaten Kepulauan Yapen",
                    "latitude": "-1.78773000",
                    "longitude": "136.27716000"
                },
                {
                    "id": 56490,
                    "name": "Kabupaten Lanny Jaya",
                    "latitude": "-3.91244000",
                    "longitude": "138.28766000"
                },
                {
                    "id": 56518,
                    "name": "Kabupaten Mamberamo Raya",
                    "latitude": "-2.23561000",
                    "longitude": "137.78229000"
                },
                {
                    "id": 56519,
                    "name": "Kabupaten Mamberamo Tengah",
                    "latitude": "-2.46064000",
                    "longitude": "138.45245000"
                },
                {
                    "id": 56529,
                    "name": "Kabupaten Mappi",
                    "latitude": "-6.49971000",
                    "longitude": "139.34441000"
                },
                {
                    "id": 56533,
                    "name": "Kabupaten Merauke",
                    "latitude": "-7.66667000",
                    "longitude": "139.66667000"
                },
                {
                    "id": 56535,
                    "name": "Kabupaten Mimika",
                    "latitude": "-4.54357000",
                    "longitude": "136.56555000"
                },
                {
                    "id": 56551,
                    "name": "Kabupaten Nabire",
                    "latitude": "-3.54016000",
                    "longitude": "135.55511000"
                },
                {
                    "id": 56555,
                    "name": "Kabupaten Nduga",
                    "latitude": "-4.45093000",
                    "longitude": "138.10089000"
                },
                {
                    "id": 56577,
                    "name": "Kabupaten Paniai",
                    "latitude": "-3.90000000",
                    "longitude": "136.60000000"
                },
                {
                    "id": 56584,
                    "name": "Kabupaten Pegunungan Bintang",
                    "latitude": "-4.52167000",
                    "longitude": "140.29541000"
                },
                {
                    "id": 56604,
                    "name": "Kabupaten Puncak Jaya",
                    "latitude": "-3.67241000",
                    "longitude": "137.43896000"
                },
                {
                    "id": 56617,
                    "name": "Kabupaten Sarmi",
                    "latitude": "-2.41667000",
                    "longitude": "139.08333000"
                },
                {
                    "id": 56656,
                    "name": "Kabupaten Supiori",
                    "latitude": "-0.73881000",
                    "longitude": "135.61111000"
                },
                {
                    "id": 56683,
                    "name": "Kabupaten Tolikara",
                    "latitude": "-3.42661000",
                    "longitude": "137.41699000"
                },
                {
                    "id": 56690,
                    "name": "Kabupaten Waropen",
                    "latitude": "-2.28600000",
                    "longitude": "137.01837000"
                },
                {
                    "id": 56694,
                    "name": "Kabupaten Yahukimo",
                    "latitude": "-4.60403000",
                    "longitude": "139.58405000"
                },
                {
                    "id": 56695,
                    "name": "Kabupaten Yalimo",
                    "latitude": "-3.86037000",
                    "longitude": "138.47305000"
                },
                {
                    "id": 56756,
                    "name": "Kota Jayapura",
                    "latitude": "-2.64647000",
                    "longitude": "140.77779000"
                },
                {
                    "id": 56882,
                    "name": "Nabire",
                    "latitude": "-3.35989000",
                    "longitude": "135.50074000"
                }
            ]
        },
        {
            "id": 1809,
            "name": "Riau",
            "state_code": "RI",
            "cities": [
                {
                    "id": 56188,
                    "name": "Balaipungut",
                    "latitude": "1.05949000",
                    "longitude": "101.29054000"
                },
                {
                    "id": 56208,
                    "name": "Batam",
                    "latitude": "1.14937000",
                    "longitude": "104.02491000"
                },
                {
                    "id": 56270,
                    "name": "Dumai",
                    "latitude": "1.66711000",
                    "longitude": "101.44316000"
                },
                {
                    "id": 56354,
                    "name": "Kabupaten Bengkalis",
                    "latitude": "0.98380000",
                    "longitude": "102.50960000"
                },
                {
                    "id": 56424,
                    "name": "Kabupaten Indragiri Hilir",
                    "latitude": "-0.33333000",
                    "longitude": "103.16667000"
                },
                {
                    "id": 56425,
                    "name": "Kabupaten Indragiri Hulu",
                    "latitude": "-0.55000000",
                    "longitude": "102.31667000"
                },
                {
                    "id": 56436,
                    "name": "Kabupaten Kampar",
                    "latitude": "0.23440000",
                    "longitude": "101.21310000"
                },
                {
                    "id": 56453,
                    "name": "Kabupaten Kepulauan Meranti",
                    "latitude": "0.97488000",
                    "longitude": "102.69539000"
                },
                {
                    "id": 56471,
                    "name": "Kabupaten Kuantan Singingi",
                    "latitude": "-0.47532000",
                    "longitude": "101.45857000"
                },
                {
                    "id": 56586,
                    "name": "Kabupaten Pelalawan",
                    "latitude": "0.20822000",
                    "longitude": "102.18607000"
                },
                {
                    "id": 56611,
                    "name": "Kabupaten Rokan Hilir",
                    "latitude": "2.16599000",
                    "longitude": "100.82514000"
                },
                {
                    "id": 56612,
                    "name": "Kabupaten Rokan Hulu",
                    "latitude": "0.88333000",
                    "longitude": "100.48333000"
                },
                {
                    "id": 56626,
                    "name": "Kabupaten Siak",
                    "latitude": "0.97453000",
                    "longitude": "102.01355000"
                },
                {
                    "id": 56752,
                    "name": "Kota Dumai",
                    "latitude": "1.61592000",
                    "longitude": "101.49170000"
                },
                {
                    "id": 56787,
                    "name": "Kota Pekanbaru",
                    "latitude": "0.53333000",
                    "longitude": "101.46667000"
                },
                {
                    "id": 56927,
                    "name": "Pekanbaru",
                    "latitude": "0.51667000",
                    "longitude": "101.44167000"
                }
            ]
        },
        {
            "id": 1807,
            "name": "Riau Islands",
            "state_code": "KR",
            "cities": [
                {
                    "id": 56361,
                    "name": "Kabupaten Bintan",
                    "latitude": "0.95000000",
                    "longitude": "104.61944000"
                },
                {
                    "id": 56441,
                    "name": "Kabupaten Karimun",
                    "latitude": "0.80764000",
                    "longitude": "103.41911000"
                },
                {
                    "id": 56450,
                    "name": "Kabupaten Kepulauan Anambas",
                    "latitude": "3.00000000",
                    "longitude": "106.00000000"
                },
                {
                    "id": 56495,
                    "name": "Kabupaten Lingga",
                    "latitude": "0.20000000",
                    "longitude": "104.61667000"
                },
                {
                    "id": 56554,
                    "name": "Kabupaten Natuna",
                    "latitude": "4.71417000",
                    "longitude": "107.97639000"
                },
                {
                    "id": 56716,
                    "name": "Kijang",
                    "latitude": "0.90000000",
                    "longitude": "104.63333000"
                },
                {
                    "id": 56735,
                    "name": "Kota Batam",
                    "latitude": "1.05211000",
                    "longitude": "104.02851000"
                },
                {
                    "id": 56808,
                    "name": "Kota Tanjung Pinang",
                    "latitude": "0.91683000",
                    "longitude": "104.44329000"
                },
                {
                    "id": 57018,
                    "name": "Tanjung Pinang",
                    "latitude": "0.91667000",
                    "longitude": "104.45833000"
                }
            ]
        },
        {
            "id": 1819,
            "name": "South Kalimantan",
            "state_code": "KS",
            "cities": [
                {
                    "id": 56181,
                    "name": "Amuntai",
                    "latitude": "-2.41773000",
                    "longitude": "115.24941000"
                },
                {
                    "id": 56203,
                    "name": "Banjarmasin",
                    "latitude": "-3.31987000",
                    "longitude": "114.59075000"
                },
                {
                    "id": 56207,
                    "name": "Barabai",
                    "latitude": "-2.58333000",
                    "longitude": "115.38333000"
                },
                {
                    "id": 56323,
                    "name": "Kabupaten Balangan",
                    "latitude": "-2.32314000",
                    "longitude": "115.62922000"
                },
                {
                    "id": 56335,
                    "name": "Kabupaten Banjar",
                    "latitude": "-3.31667000",
                    "longitude": "115.08333000"
                },
                {
                    "id": 56341,
                    "name": "Kabupaten Barito Kuala",
                    "latitude": "-3.08333000",
                    "longitude": "114.61667000"
                },
                {
                    "id": 56420,
                    "name": "Kabupaten Hulu Sungai Selatan",
                    "latitude": "-2.75000000",
                    "longitude": "115.20000000"
                },
                {
                    "id": 56421,
                    "name": "Kabupaten Hulu Sungai Tengah",
                    "latitude": "-2.61667000",
                    "longitude": "115.41667000"
                },
                {
                    "id": 56422,
                    "name": "Kabupaten Hulu Sungai Utara",
                    "latitude": "-2.45000000",
                    "longitude": "115.13333000"
                },
                {
                    "id": 56468,
                    "name": "Kabupaten Kota Baru",
                    "latitude": "-3.00000000",
                    "longitude": "116.00000000"
                },
                {
                    "id": 56657,
                    "name": "Kabupaten Tabalong",
                    "latitude": "-1.88333000",
                    "longitude": "115.50000000"
                },
                {
                    "id": 56663,
                    "name": "Kabupaten Tanah Bumbu",
                    "latitude": "-3.45413000",
                    "longitude": "115.70372000"
                },
                {
                    "id": 56665,
                    "name": "Kabupaten Tanah Laut",
                    "latitude": "-3.88333000",
                    "longitude": "114.86667000"
                },
                {
                    "id": 56673,
                    "name": "Kabupaten Tapin",
                    "latitude": "-2.91667000",
                    "longitude": "115.03333000"
                },
                {
                    "id": 56733,
                    "name": "Kota Banjar Baru",
                    "latitude": "-3.41667000",
                    "longitude": "114.83333000"
                },
                {
                    "id": 56734,
                    "name": "Kota Banjarmasin",
                    "latitude": "-3.32444000",
                    "longitude": "114.59102000"
                },
                {
                    "id": 56864,
                    "name": "Martapura",
                    "latitude": "-3.41090000",
                    "longitude": "114.86420000"
                }
            ]
        },
        {
            "id": 1795,
            "name": "South Sulawesi",
            "state_code": "SN",
            "cities": [
                {
                    "id": 56273,
                    "name": "Galesong",
                    "latitude": "-5.31660000",
                    "longitude": "119.36610000"
                },
                {
                    "id": 56337,
                    "name": "Kabupaten Bantaeng",
                    "latitude": "-5.48333000",
                    "longitude": "119.98333000"
                },
                {
                    "id": 56345,
                    "name": "Kabupaten Barru",
                    "latitude": "-4.43333000",
                    "longitude": "119.68333000"
                },
                {
                    "id": 56374,
                    "name": "Kabupaten Bone",
                    "latitude": "-4.70000000",
                    "longitude": "120.13333000"
                },
                {
                    "id": 56380,
                    "name": "Kabupaten Bulukumba",
                    "latitude": "-5.41667000",
                    "longitude": "120.23333000"
                },
                {
                    "id": 56404,
                    "name": "Kabupaten Enrekang",
                    "latitude": "-3.50000000",
                    "longitude": "119.86667000"
                },
                {
                    "id": 56412,
                    "name": "Kabupaten Gowa",
                    "latitude": "-5.31667000",
                    "longitude": "119.75000000"
                },
                {
                    "id": 56432,
                    "name": "Kabupaten Jeneponto",
                    "latitude": "-5.63333000",
                    "longitude": "119.73333000"
                },
                {
                    "id": 56501,
                    "name": "Kabupaten Luwu",
                    "latitude": "-2.55770000",
                    "longitude": "121.32420000"
                },
                {
                    "id": 56502,
                    "name": "Kabupaten Luwu Timur",
                    "latitude": "-2.50957000",
                    "longitude": "120.39780000"
                },
                {
                    "id": 56503,
                    "name": "Kabupaten Luwu Utara",
                    "latitude": "-2.60000000",
                    "longitude": "120.25000000"
                },
                {
                    "id": 56530,
                    "name": "Kabupaten Maros",
                    "latitude": "-5.05000000",
                    "longitude": "119.71667000"
                },
                {
                    "id": 56576,
                    "name": "Kabupaten Pangkajene Dan Kepulauan",
                    "latitude": "-4.78270000",
                    "longitude": "119.55060000"
                },
                {
                    "id": 56594,
                    "name": "Kabupaten Pinrang",
                    "latitude": "-3.61667000",
                    "longitude": "119.60000000"
                },
                {
                    "id": 56628,
                    "name": "Kabupaten Sidenreng Rappang",
                    "latitude": "-3.85000000",
                    "longitude": "119.96667000"
                },
                {
                    "id": 56635,
                    "name": "Kabupaten Sinjai",
                    "latitude": "-5.21667000",
                    "longitude": "120.15000000"
                },
                {
                    "id": 56640,
                    "name": "Kabupaten Soppeng",
                    "latitude": "-4.38420000",
                    "longitude": "119.89000000"
                },
                {
                    "id": 56659,
                    "name": "Kabupaten Takalar",
                    "latitude": "-5.41667000",
                    "longitude": "119.51667000"
                },
                {
                    "id": 56662,
                    "name": "Kabupaten Tana Toraja",
                    "latitude": "-3.00240000",
                    "longitude": "119.79655000"
                },
                {
                    "id": 56684,
                    "name": "Kabupaten Toraja Utara",
                    "latitude": "-2.92738000",
                    "longitude": "119.79218000"
                },
                {
                    "id": 56689,
                    "name": "Kabupaten Wajo",
                    "latitude": "-4.00000000",
                    "longitude": "120.16667000"
                },
                {
                    "id": 56766,
                    "name": "Kota Makassar",
                    "latitude": "-5.15000000",
                    "longitude": "119.45000000"
                },
                {
                    "id": 56779,
                    "name": "Kota Palopo",
                    "latitude": "-2.97841000",
                    "longitude": "120.11078000"
                },
                {
                    "id": 56782,
                    "name": "Kota Parepare",
                    "latitude": "-4.03333000",
                    "longitude": "119.65000000"
                },
                {
                    "id": 56855,
                    "name": "Makassar",
                    "latitude": "-5.14861000",
                    "longitude": "119.43194000"
                },
                {
                    "id": 56863,
                    "name": "Maros",
                    "latitude": "-5.00600000",
                    "longitude": "119.57270000"
                },
                {
                    "id": 56900,
                    "name": "Palopo",
                    "latitude": "-2.99250000",
                    "longitude": "120.19694000"
                },
                {
                    "id": 56916,
                    "name": "Parepare",
                    "latitude": "-4.01350000",
                    "longitude": "119.62550000"
                },
                {
                    "id": 56952,
                    "name": "Rantepao",
                    "latitude": "-2.97010000",
                    "longitude": "119.89780000"
                },
                {
                    "id": 56963,
                    "name": "Selayar Islands Regency",
                    "latitude": "-6.81667000",
                    "longitude": "120.80000000"
                },
                {
                    "id": 56967,
                    "name": "Sengkang",
                    "latitude": "-4.12790000",
                    "longitude": "120.02970000"
                },
                {
                    "id": 56985,
                    "name": "Sinjai",
                    "latitude": "-5.12410000",
                    "longitude": "120.25300000"
                },
                {
                    "id": 57052,
                    "name": "Watampone",
                    "latitude": "-4.53860000",
                    "longitude": "120.32790000"
                }
            ]
        },
        {
            "id": 1816,
            "name": "South Sumatra",
            "state_code": "SS",
            "cities": [
                {
                    "id": 56212,
                    "name": "Baturaja",
                    "latitude": "-4.12891000",
                    "longitude": "104.16695000"
                },
                {
                    "id": 56402,
                    "name": "Kabupaten Empat Lawang",
                    "latitude": "3.22667000",
                    "longitude": "99.09256000"
                },
                {
                    "id": 56542,
                    "name": "Kabupaten Muara Enim",
                    "latitude": "-4.23270000",
                    "longitude": "103.61410000"
                },
                {
                    "id": 56548,
                    "name": "Kabupaten Musi Banyuasin",
                    "latitude": "-2.41667000",
                    "longitude": "103.75000000"
                },
                {
                    "id": 56549,
                    "name": "Kabupaten Musi Rawas",
                    "latitude": "-3.08333000",
                    "longitude": "103.20000000"
                },
                {
                    "id": 56550,
                    "name": "Kabupaten Musi Rawas Utara",
                    "latitude": "-2.48533000",
                    "longitude": "103.29346000"
                },
                {
                    "id": 56563,
                    "name": "Kabupaten Ogan Ilir",
                    "latitude": "-3.43186000",
                    "longitude": "104.62727000"
                },
                {
                    "id": 56564,
                    "name": "Kabupaten Ogan Komering Ilir",
                    "latitude": "-3.36667000",
                    "longitude": "105.36667000"
                },
                {
                    "id": 56565,
                    "name": "Kabupaten Ogan Komering Ulu",
                    "latitude": "-4.13333000",
                    "longitude": "104.03333000"
                },
                {
                    "id": 56566,
                    "name": "Kabupaten Ogan Komering Ulu Selatan",
                    "latitude": "-4.65728000",
                    "longitude": "104.00659000"
                },
                {
                    "id": 56567,
                    "name": "Kabupaten Ogan Komering Ulu Timur",
                    "latitude": "-3.85679000",
                    "longitude": "104.75209000"
                },
                {
                    "id": 56589,
                    "name": "Kabupaten Penukal Abab Lematang Ilir",
                    "latitude": "-3.21342000",
                    "longitude": "104.08722000"
                },
                {
                    "id": 56763,
                    "name": "Kota Lubuklinggau",
                    "latitude": "-3.29308000",
                    "longitude": "102.85503000"
                },
                {
                    "id": 56776,
                    "name": "Kota Pagar Alam",
                    "latitude": "-4.13055000",
                    "longitude": "103.26822000"
                },
                {
                    "id": 56778,
                    "name": "Kota Palembang",
                    "latitude": "-3.00000000",
                    "longitude": "104.71667000"
                },
                {
                    "id": 56789,
                    "name": "Kota Prabumulih",
                    "latitude": "-3.46202000",
                    "longitude": "104.22290000"
                },
                {
                    "id": 56833,
                    "name": "Lahat",
                    "latitude": "-3.78514000",
                    "longitude": "103.54279000"
                },
                {
                    "id": 56834,
                    "name": "Lahat Regency",
                    "latitude": "-3.78640000",
                    "longitude": "103.54280000"
                },
                {
                    "id": 56847,
                    "name": "Lubuklinggau",
                    "latitude": "-3.29450000",
                    "longitude": "102.86140000"
                },
                {
                    "id": 56895,
                    "name": "Pagar Alam",
                    "latitude": "-4.02506000",
                    "longitude": "103.24694000"
                },
                {
                    "id": 56898,
                    "name": "Palembang",
                    "latitude": "-2.91673000",
                    "longitude": "104.74580000"
                },
                {
                    "id": 56939,
                    "name": "Prabumulih",
                    "latitude": "-3.43447000",
                    "longitude": "104.23056000"
                },
                {
                    "id": 57020,
                    "name": "Tanjungagung",
                    "latitude": "-3.93728000",
                    "longitude": "103.80465000"
                }
            ]
        },
        {
            "id": 1796,
            "name": "Southeast Sulawesi",
            "state_code": "SG",
            "cities": [
                {
                    "id": 56372,
                    "name": "Kabupaten Bombana",
                    "latitude": "-4.62570000",
                    "longitude": "121.81641000"
                },
                {
                    "id": 56386,
                    "name": "Kabupaten Buton",
                    "latitude": "-5.31667000",
                    "longitude": "122.91667000"
                },
                {
                    "id": 56387,
                    "name": "Kabupaten Buton Selatan",
                    "latitude": "-5.56667000",
                    "longitude": "122.70000000"
                },
                {
                    "id": 56388,
                    "name": "Kabupaten Buton Tengah",
                    "latitude": "-5.31667000",
                    "longitude": "122.33333000"
                },
                {
                    "id": 56389,
                    "name": "Kabupaten Buton Utara",
                    "latitude": "-5.01457000",
                    "longitude": "122.93015000"
                },
                {
                    "id": 56461,
                    "name": "Kabupaten Kolaka",
                    "latitude": "-4.08333000",
                    "longitude": "121.66667000"
                },
                {
                    "id": 56462,
                    "name": "Kabupaten Kolaka Timur",
                    "latitude": "-4.01807000",
                    "longitude": "121.86172000"
                },
                {
                    "id": 56463,
                    "name": "Kabupaten Kolaka Utara",
                    "latitude": "-3.10452000",
                    "longitude": "121.12427000"
                },
                {
                    "id": 56464,
                    "name": "Kabupaten Konawe",
                    "latitude": "-3.91717000",
                    "longitude": "122.08823000"
                },
                {
                    "id": 56465,
                    "name": "Kabupaten Konawe Kepulauan",
                    "latitude": "-4.11656000",
                    "longitude": "123.10181000"
                },
                {
                    "id": 56466,
                    "name": "Kabupaten Konawe Selatan",
                    "latitude": "-4.19191000",
                    "longitude": "122.44854000"
                },
                {
                    "id": 56467,
                    "name": "Kabupaten Konawe Utara",
                    "latitude": "-3.41552000",
                    "longitude": "121.99081000"
                },
                {
                    "id": 56545,
                    "name": "Kabupaten Muna",
                    "latitude": "-4.96667000",
                    "longitude": "122.66667000"
                },
                {
                    "id": 56546,
                    "name": "Kabupaten Muna Barat",
                    "latitude": "-4.83333000",
                    "longitude": "122.48333000"
                },
                {
                    "id": 56703,
                    "name": "Katabu",
                    "latitude": "-4.93330000",
                    "longitude": "122.51670000"
                },
                {
                    "id": 56712,
                    "name": "Kendari",
                    "latitude": "-3.97780000",
                    "longitude": "122.51507000"
                },
                {
                    "id": 56737,
                    "name": "Kota Baubau",
                    "latitude": "-5.47700000",
                    "longitude": "122.61660000"
                },
                {
                    "id": 56758,
                    "name": "Kota Kendari",
                    "latitude": "-3.98333000",
                    "longitude": "122.50000000"
                },
                {
                    "id": 57049,
                    "name": "Wakatobi Regency",
                    "latitude": "-5.31934000",
                    "longitude": "123.59480000"
                }
            ]
        },
        {
            "id": 1829,
            "name": "Special Region of Yogyakarta",
            "state_code": "YO",
            "cities": [
                {
                    "id": 56192,
                    "name": "Bambanglipuro",
                    "latitude": "-7.95000000",
                    "longitude": "110.28333000"
                },
                {
                    "id": 56204,
                    "name": "Bantul",
                    "latitude": "-7.88806000",
                    "longitude": "110.32889000"
                },
                {
                    "id": 56264,
                    "name": "Depok",
                    "latitude": "-7.76250000",
                    "longitude": "110.43167000"
                },
                {
                    "id": 56276,
                    "name": "Gamping Lor",
                    "latitude": "-7.79556000",
                    "longitude": "110.32639000"
                },
                {
                    "id": 56282,
                    "name": "Godean",
                    "latitude": "-7.76972000",
                    "longitude": "110.29389000"
                },
                {
                    "id": 56338,
                    "name": "Kabupaten Bantul",
                    "latitude": "-7.90000000",
                    "longitude": "110.36667000"
                },
                {
                    "id": 56414,
                    "name": "Kabupaten Gunung Kidul",
                    "latitude": "-7.98333000",
                    "longitude": "110.61667000"
                },
                {
                    "id": 56473,
                    "name": "Kabupaten Kulon Progo",
                    "latitude": "-7.64500000",
                    "longitude": "110.02694000"
                },
                {
                    "id": 56637,
                    "name": "Kabupaten Sleman",
                    "latitude": "-7.68167000",
                    "longitude": "110.32333000"
                },
                {
                    "id": 56702,
                    "name": "Kasihan",
                    "latitude": "-7.82694000",
                    "longitude": "110.32917000"
                },
                {
                    "id": 56816,
                    "name": "Kota Yogyakarta",
                    "latitude": "-7.80000000",
                    "longitude": "110.37500000"
                },
                {
                    "id": 56868,
                    "name": "Melati",
                    "latitude": "-7.73333000",
                    "longitude": "110.36667000"
                },
                {
                    "id": 56908,
                    "name": "Pandak",
                    "latitude": "-7.91306000",
                    "longitude": "110.29361000"
                },
                {
                    "id": 56943,
                    "name": "Pundong",
                    "latitude": "-7.95222000",
                    "longitude": "110.34861000"
                },
                {
                    "id": 56972,
                    "name": "Sewon",
                    "latitude": "-7.87639000",
                    "longitude": "110.35889000"
                },
                {
                    "id": 56988,
                    "name": "Sleman",
                    "latitude": "-7.71556000",
                    "longitude": "110.35556000"
                },
                {
                    "id": 56998,
                    "name": "Srandakan",
                    "latitude": "-7.93861000",
                    "longitude": "110.25056000"
                },
                {
                    "id": 57061,
                    "name": "Yogyakarta",
                    "latitude": "-7.80139000",
                    "longitude": "110.36472000"
                }
            ]
        },
        {
            "id": 1803,
            "name": "Sulawesi",
            "state_code": "SL",
            "cities": []
        },
        {
            "id": 1797,
            "name": "Sumatra",
            "state_code": "SM",
            "cities": []
        },
        {
            "id": 1825,
            "name": "West Java",
            "state_code": "JB",
            "cities": [
                {
                    "id": 56182,
                    "name": "Arjawinangun",
                    "latitude": "-6.64528000",
                    "longitude": "108.41028000"
                },
                {
                    "id": 56183,
                    "name": "Astanajapura",
                    "latitude": "-6.80170000",
                    "longitude": "108.63110000"
                },
                {
                    "id": 56196,
                    "name": "Bandung",
                    "latitude": "-6.92222000",
                    "longitude": "107.60694000"
                },
                {
                    "id": 56199,
                    "name": "Banjar",
                    "latitude": "-7.19550000",
                    "longitude": "107.43130000"
                },
                {
                    "id": 56202,
                    "name": "Banjaran",
                    "latitude": "-7.04528000",
                    "longitude": "107.58778000"
                },
                {
                    "id": 56215,
                    "name": "Bekasi",
                    "latitude": "-6.23490000",
                    "longitude": "106.98960000"
                },
                {
                    "id": 56226,
                    "name": "Bogor",
                    "latitude": "-6.59444000",
                    "longitude": "106.78917000"
                },
                {
                    "id": 56237,
                    "name": "Caringin",
                    "latitude": "-6.70611000",
                    "longitude": "106.82139000"
                },
                {
                    "id": 56240,
                    "name": "Ciamis",
                    "latitude": "-7.32570000",
                    "longitude": "108.35340000"
                },
                {
                    "id": 56241,
                    "name": "Ciampea",
                    "latitude": "-6.55472000",
                    "longitude": "106.70083000"
                },
                {
                    "id": 56242,
                    "name": "Cibinong",
                    "latitude": "-6.48167000",
                    "longitude": "106.85417000"
                },
                {
                    "id": 56243,
                    "name": "Cicurug",
                    "latitude": "-6.78139000",
                    "longitude": "106.78250000"
                },
                {
                    "id": 56244,
                    "name": "Cikampek",
                    "latitude": "-6.41972000",
                    "longitude": "107.45583000"
                },
                {
                    "id": 56245,
                    "name": "Cikarang",
                    "latitude": "-6.26111000",
                    "longitude": "107.15278000"
                },
                {
                    "id": 56246,
                    "name": "Cikupa",
                    "latitude": "-6.23639000",
                    "longitude": "106.50833000"
                },
                {
                    "id": 56247,
                    "name": "Cileungsir",
                    "latitude": "-6.39472000",
                    "longitude": "106.95917000"
                },
                {
                    "id": 56248,
                    "name": "Cileunyi",
                    "latitude": "-6.93889000",
                    "longitude": "107.75278000"
                },
                {
                    "id": 56249,
                    "name": "Cimahi",
                    "latitude": "-6.87222000",
                    "longitude": "107.54250000"
                },
                {
                    "id": 56250,
                    "name": "Ciputat",
                    "latitude": "-6.23750000",
                    "longitude": "106.69556000"
                },
                {
                    "id": 56251,
                    "name": "Ciranjang-hilir",
                    "latitude": "-6.82000000",
                    "longitude": "107.25722000"
                },
                {
                    "id": 56252,
                    "name": "Cirebon",
                    "latitude": "-6.70630000",
                    "longitude": "108.55700000"
                },
                {
                    "id": 56253,
                    "name": "Citeureup",
                    "latitude": "-6.48556000",
                    "longitude": "106.88194000"
                },
                {
                    "id": 56265,
                    "name": "Depok",
                    "latitude": "-6.40000000",
                    "longitude": "106.81861000"
                },
                {
                    "id": 56291,
                    "name": "Indramayu",
                    "latitude": "-6.32639000",
                    "longitude": "108.32000000"
                },
                {
                    "id": 56296,
                    "name": "Jatibarang",
                    "latitude": "-6.47472000",
                    "longitude": "108.31528000"
                },
                {
                    "id": 56298,
                    "name": "Jatiwangi",
                    "latitude": "-6.73361000",
                    "longitude": "108.26278000"
                },
                {
                    "id": 56324,
                    "name": "Kabupaten Bandung",
                    "latitude": "-7.10000000",
                    "longitude": "107.60000000"
                },
                {
                    "id": 56325,
                    "name": "Kabupaten Bandung Barat",
                    "latitude": "-6.83333000",
                    "longitude": "107.48333000"
                },
                {
                    "id": 56349,
                    "name": "Kabupaten Bekasi",
                    "latitude": "-6.24667000",
                    "longitude": "107.10833000"
                },
                {
                    "id": 56366,
                    "name": "Kabupaten Bogor",
                    "latitude": "-6.58333000",
                    "longitude": "106.71667000"
                },
                {
                    "id": 56390,
                    "name": "Kabupaten Ciamis",
                    "latitude": "-7.28333000",
                    "longitude": "108.41667000"
                },
                {
                    "id": 56391,
                    "name": "Kabupaten Cianjur",
                    "latitude": "-6.77250000",
                    "longitude": "107.08306000"
                },
                {
                    "id": 56393,
                    "name": "Kabupaten Cirebon",
                    "latitude": "-6.80000000",
                    "longitude": "108.56667000"
                },
                {
                    "id": 56407,
                    "name": "Kabupaten Garut",
                    "latitude": "-7.38333000",
                    "longitude": "107.76667000"
                },
                {
                    "id": 56426,
                    "name": "Kabupaten Indramayu",
                    "latitude": "-6.45000000",
                    "longitude": "108.16667000"
                },
                {
                    "id": 56440,
                    "name": "Kabupaten Karawang",
                    "latitude": "-6.26667000",
                    "longitude": "107.41667000"
                },
                {
                    "id": 56474,
                    "name": "Kabupaten Kuningan",
                    "latitude": "-7.00000000",
                    "longitude": "108.55000000"
                },
                {
                    "id": 56508,
                    "name": "Kabupaten Majalengka",
                    "latitude": "-6.81667000",
                    "longitude": "108.28333000"
                },
                {
                    "id": 56575,
                    "name": "Kabupaten Pangandaran",
                    "latitude": "-7.66730000",
                    "longitude": "108.64037000"
                },
                {
                    "id": 56606,
                    "name": "Kabupaten Purwakarta",
                    "latitude": "-6.58333000",
                    "longitude": "107.45000000"
                },
                {
                    "id": 56644,
                    "name": "Kabupaten Subang",
                    "latitude": "-6.50833000",
                    "longitude": "107.70250000"
                },
                {
                    "id": 56645,
                    "name": "Kabupaten Sukabumi",
                    "latitude": "-7.06667000",
                    "longitude": "106.70000000"
                },
                {
                    "id": 56654,
                    "name": "Kabupaten Sumedang",
                    "latitude": "-6.81667000",
                    "longitude": "107.98333000"
                },
                {
                    "id": 56674,
                    "name": "Kabupaten Tasikmalaya",
                    "latitude": "-7.50000000",
                    "longitude": "108.13333000"
                },
                {
                    "id": 56698,
                    "name": "Karangampel",
                    "latitude": "-6.46222000",
                    "longitude": "108.45194000"
                },
                {
                    "id": 56700,
                    "name": "Karangsembung",
                    "latitude": "-6.84870000",
                    "longitude": "108.64220000"
                },
                {
                    "id": 56704,
                    "name": "Kawalu",
                    "latitude": "-7.38170000",
                    "longitude": "108.20820000"
                },
                {
                    "id": 56718,
                    "name": "Klangenan",
                    "latitude": "-6.70944000",
                    "longitude": "108.44000000"
                },
                {
                    "id": 56731,
                    "name": "Kota Bandung",
                    "latitude": "-6.91750000",
                    "longitude": "107.62444000"
                },
                {
                    "id": 56732,
                    "name": "Kota Banjar",
                    "latitude": "-7.36996000",
                    "longitude": "108.53209000"
                },
                {
                    "id": 56738,
                    "name": "Kota Bekasi",
                    "latitude": "-6.28333000",
                    "longitude": "106.98333000"
                },
                {
                    "id": 56744,
                    "name": "Kota Bogor",
                    "latitude": "-6.59167000",
                    "longitude": "106.80000000"
                },
                {
                    "id": 56748,
                    "name": "Kota Cimahi",
                    "latitude": "-6.89167000",
                    "longitude": "107.55000000"
                },
                {
                    "id": 56749,
                    "name": "Kota Cirebon",
                    "latitude": "-6.75000000",
                    "longitude": "108.55000000"
                },
                {
                    "id": 56751,
                    "name": "Kota Depok",
                    "latitude": "-6.40000000",
                    "longitude": "106.81667000"
                },
                {
                    "id": 56801,
                    "name": "Kota Sukabumi",
                    "latitude": "-6.95000000",
                    "longitude": "106.93333000"
                },
                {
                    "id": 56809,
                    "name": "Kota Tasikmalaya",
                    "latitude": "-7.35000000",
                    "longitude": "108.21667000"
                },
                {
                    "id": 56819,
                    "name": "Kresek",
                    "latitude": "-6.13139000",
                    "longitude": "106.37972000"
                },
                {
                    "id": 56825,
                    "name": "Kuningan",
                    "latitude": "-6.97583000",
                    "longitude": "108.48306000"
                },
                {
                    "id": 56842,
                    "name": "Lembang",
                    "latitude": "-6.81167000",
                    "longitude": "107.61750000"
                },
                {
                    "id": 56852,
                    "name": "Majalengka",
                    "latitude": "-6.83611000",
                    "longitude": "108.22778000"
                },
                {
                    "id": 56861,
                    "name": "Margahayukencana",
                    "latitude": "-6.97083000",
                    "longitude": "107.56750000"
                },
                {
                    "id": 56886,
                    "name": "Ngawi",
                    "latitude": "-7.40380000",
                    "longitude": "111.44610000"
                },
                {
                    "id": 56892,
                    "name": "Padalarang",
                    "latitude": "-6.83778000",
                    "longitude": "107.47278000"
                },
                {
                    "id": 56899,
                    "name": "Palimanan",
                    "latitude": "-6.70694000",
                    "longitude": "108.42417000"
                },
                {
                    "id": 56902,
                    "name": "Pamanukan",
                    "latitude": "-6.28417000",
                    "longitude": "107.81056000"
                },
                {
                    "id": 56904,
                    "name": "Pameungpeuk",
                    "latitude": "-7.01833000",
                    "longitude": "107.60389000"
                },
                {
                    "id": 56905,
                    "name": "Pamulang",
                    "latitude": "-6.34278000",
                    "longitude": "106.73833000"
                },
                {
                    "id": 56918,
                    "name": "Parung",
                    "latitude": "-6.42139000",
                    "longitude": "106.73306000"
                },
                {
                    "id": 56919,
                    "name": "Pasarkemis",
                    "latitude": "-6.17028000",
                    "longitude": "106.53028000"
                },
                {
                    "id": 56920,
                    "name": "Paseh",
                    "latitude": "-7.10260000",
                    "longitude": "107.76410000"
                },
                {
                    "id": 56928,
                    "name": "Pelabuhanratu",
                    "latitude": "-6.98750000",
                    "longitude": "106.55139000"
                },
                {
                    "id": 56934,
                    "name": "Plumbon",
                    "latitude": "-6.70500000",
                    "longitude": "108.47278000"
                },
                {
                    "id": 56945,
                    "name": "Purwakarta",
                    "latitude": "-6.55694000",
                    "longitude": "107.44333000"
                },
                {
                    "id": 56948,
                    "name": "Rajapolah",
                    "latitude": "-7.22100000",
                    "longitude": "108.18960000"
                },
                {
                    "id": 56954,
                    "name": "Rengasdengklok",
                    "latitude": "-6.15917000",
                    "longitude": "107.29806000"
                },
                {
                    "id": 56962,
                    "name": "Sawangan",
                    "latitude": "-6.40278000",
                    "longitude": "106.77444000"
                },
                {
                    "id": 56968,
                    "name": "Sepatan",
                    "latitude": "-6.11889000",
                    "longitude": "106.57500000"
                },
                {
                    "id": 56971,
                    "name": "Serpong",
                    "latitude": "-6.31694000",
                    "longitude": "106.66417000"
                },
                {
                    "id": 56980,
                    "name": "Singaparna",
                    "latitude": "-7.35150000",
                    "longitude": "108.11100000"
                },
                {
                    "id": 56994,
                    "name": "Soreang",
                    "latitude": "-7.03306000",
                    "longitude": "107.51833000"
                },
                {
                    "id": 57001,
                    "name": "Sukabumi",
                    "latitude": "-6.91806000",
                    "longitude": "106.92667000"
                },
                {
                    "id": 57003,
                    "name": "Sumber",
                    "latitude": "-6.76028000",
                    "longitude": "108.48306000"
                },
                {
                    "id": 57005,
                    "name": "Sumedang",
                    "latitude": "-6.85861000",
                    "longitude": "107.91639000"
                },
                {
                    "id": 57006,
                    "name": "Sumedang Utara",
                    "latitude": "-6.85000000",
                    "longitude": "107.91667000"
                },
                {
                    "id": 57025,
                    "name": "Tasikmalaya",
                    "latitude": "-7.32740000",
                    "longitude": "108.22070000"
                },
                {
                    "id": 57030,
                    "name": "Teluknaga",
                    "latitude": "-6.09889000",
                    "longitude": "106.63806000"
                },
                {
                    "id": 57050,
                    "name": "Wanaraja",
                    "latitude": "-7.17490000",
                    "longitude": "107.98080000"
                },
                {
                    "id": 57056,
                    "name": "Weru",
                    "latitude": "-6.71100000",
                    "longitude": "108.50370000"
                }
            ]
        },
        {
            "id": 1814,
            "name": "West Nusa Tenggara",
            "state_code": "NB",
            "cities": [
                {
                    "id": 56221,
                    "name": "Bima",
                    "latitude": "-8.46006000",
                    "longitude": "118.72667000"
                },
                {
                    "id": 56267,
                    "name": "Dompu",
                    "latitude": "-8.53650000",
                    "longitude": "118.46340000"
                },
                {
                    "id": 56281,
                    "name": "Gili Air",
                    "latitude": "-8.35783000",
                    "longitude": "116.08240000"
                },
                {
                    "id": 56360,
                    "name": "Kabupaten Bima",
                    "latitude": "-8.60000000",
                    "longitude": "118.61667000"
                },
                {
                    "id": 56400,
                    "name": "Kabupaten Dompu",
                    "latitude": "-8.50940000",
                    "longitude": "118.48160000"
                },
                {
                    "id": 56496,
                    "name": "Kabupaten Lombok Barat",
                    "latitude": "-8.69583000",
                    "longitude": "116.11667000"
                },
                {
                    "id": 56497,
                    "name": "Kabupaten Lombok Tengah",
                    "latitude": "-8.70000000",
                    "longitude": "116.30000000"
                },
                {
                    "id": 56498,
                    "name": "Kabupaten Lombok Timur",
                    "latitude": "-8.53333000",
                    "longitude": "116.53333000"
                },
                {
                    "id": 56499,
                    "name": "Kabupaten Lombok Utara",
                    "latitude": "-8.35214000",
                    "longitude": "116.40152000"
                },
                {
                    "id": 56652,
                    "name": "Kabupaten Sumbawa",
                    "latitude": "-8.74390000",
                    "longitude": "117.33240000"
                },
                {
                    "id": 56653,
                    "name": "Kabupaten Sumbawa Barat",
                    "latitude": "-8.75159000",
                    "longitude": "116.92132000"
                },
                {
                    "id": 56740,
                    "name": "Kota Bima",
                    "latitude": "-8.46728000",
                    "longitude": "118.75259000"
                },
                {
                    "id": 56769,
                    "name": "Kota Mataram",
                    "latitude": "-8.58330000",
                    "longitude": "116.11670000"
                },
                {
                    "id": 56831,
                    "name": "Labuan Lombok",
                    "latitude": "-8.50000000",
                    "longitude": "116.66667000"
                },
                {
                    "id": 56843,
                    "name": "Lembar",
                    "latitude": "-8.72640000",
                    "longitude": "116.07440000"
                },
                {
                    "id": 56865,
                    "name": "Mataram",
                    "latitude": "-8.58333000",
                    "longitude": "116.11667000"
                },
                {
                    "id": 56931,
                    "name": "Pemenang",
                    "latitude": "-8.40401000",
                    "longitude": "116.10255000"
                },
                {
                    "id": 56938,
                    "name": "Pototano",
                    "latitude": "-8.41260000",
                    "longitude": "117.48110000"
                },
                {
                    "id": 56940,
                    "name": "Praya",
                    "latitude": "-8.70536000",
                    "longitude": "116.27036000"
                },
                {
                    "id": 56966,
                    "name": "Senggigi",
                    "latitude": "-8.49190000",
                    "longitude": "116.04240000"
                },
                {
                    "id": 57002,
                    "name": "Sumbawa Besar",
                    "latitude": "-8.49317000",
                    "longitude": "117.42024000"
                }
            ]
        },
        {
            "id": 1799,
            "name": "West Papua",
            "state_code": "PB",
            "cities": [
                {
                    "id": 56405,
                    "name": "Kabupaten Fakfak",
                    "latitude": "-2.92641000",
                    "longitude": "132.29608000"
                },
                {
                    "id": 56435,
                    "name": "Kabupaten Kaimana",
                    "latitude": "-3.66093000",
                    "longitude": "133.77451000"
                },
                {
                    "id": 56527,
                    "name": "Kabupaten Manokwari",
                    "latitude": "-0.90000000",
                    "longitude": "133.75000000"
                },
                {
                    "id": 56528,
                    "name": "Kabupaten Manokwari Selatan",
                    "latitude": "-1.07980000",
                    "longitude": "133.96729000"
                },
                {
                    "id": 56531,
                    "name": "Kabupaten Maybrat",
                    "latitude": "-1.21550000",
                    "longitude": "132.35092000"
                },
                {
                    "id": 56608,
                    "name": "Kabupaten Raja Ampat",
                    "latitude": "-0.50000000",
                    "longitude": "130.00000000"
                },
                {
                    "id": 56641,
                    "name": "Kabupaten Sorong",
                    "latitude": "-1.16667000",
                    "longitude": "131.50000000"
                },
                {
                    "id": 56642,
                    "name": "Kabupaten Sorong Selatan",
                    "latitude": "-1.50495000",
                    "longitude": "132.28638000"
                },
                {
                    "id": 56660,
                    "name": "Kabupaten Tambrauw",
                    "latitude": "-0.60515000",
                    "longitude": "132.48962000"
                },
                {
                    "id": 56677,
                    "name": "Kabupaten Teluk Bintuni",
                    "latitude": "-1.88037000",
                    "longitude": "133.33105000"
                },
                {
                    "id": 56678,
                    "name": "Kabupaten Teluk Wondama",
                    "latitude": "-2.70000000",
                    "longitude": "134.50000000"
                },
                {
                    "id": 56799,
                    "name": "Kota Sorong",
                    "latitude": "-0.86507000",
                    "longitude": "131.25152000"
                },
                {
                    "id": 56860,
                    "name": "Manokwari",
                    "latitude": "-0.86291000",
                    "longitude": "134.06402000"
                },
                {
                    "id": 56995,
                    "name": "Sorong",
                    "latitude": "-0.87956000",
                    "longitude": "131.26104000"
                }
            ]
        },
        {
            "id": 1817,
            "name": "West Sulawesi",
            "state_code": "SR",
            "cities": [
                {
                    "id": 56509,
                    "name": "Kabupaten Majene",
                    "latitude": "-3.15000000",
                    "longitude": "118.86667000"
                },
                {
                    "id": 56517,
                    "name": "Kabupaten Mamasa",
                    "latitude": "-2.96492000",
                    "longitude": "119.30631000"
                },
                {
                    "id": 56520,
                    "name": "Kabupaten Mamuju",
                    "latitude": "-2.50000000",
                    "longitude": "119.41667000"
                },
                {
                    "id": 56521,
                    "name": "Kabupaten Mamuju Tengah",
                    "latitude": "-2.82120000",
                    "longitude": "119.26620000"
                },
                {
                    "id": 56522,
                    "name": "Kabupaten Mamuju Utara",
                    "latitude": "-1.51639000",
                    "longitude": "119.42139000"
                },
                {
                    "id": 56596,
                    "name": "Kabupaten Polewali Mandar",
                    "latitude": "-3.30000000",
                    "longitude": "119.16667000"
                },
                {
                    "id": 56854,
                    "name": "Majene",
                    "latitude": "-3.54030000",
                    "longitude": "118.97070000"
                },
                {
                    "id": 56857,
                    "name": "Mamuju",
                    "latitude": "-2.68056000",
                    "longitude": "118.88611000"
                },
                {
                    "id": 56935,
                    "name": "Polewali",
                    "latitude": "-3.43240000",
                    "longitude": "119.34350000"
                }
            ]
        },
        {
            "id": 1828,
            "name": "West Sumatra",
            "state_code": "SB",
            "cities": [
                {
                    "id": 56234,
                    "name": "Bukittinggi",
                    "latitude": "-0.30907000",
                    "longitude": "100.37055000"
                },
                {
                    "id": 56318,
                    "name": "Kabupaten Agam",
                    "latitude": "-0.25000000",
                    "longitude": "100.16667000"
                },
                {
                    "id": 56398,
                    "name": "Kabupaten Dharmasraya",
                    "latitude": "-1.05000000",
                    "longitude": "101.36700000"
                },
                {
                    "id": 56452,
                    "name": "Kabupaten Kepulauan Mentawai",
                    "latitude": "1.98917000",
                    "longitude": "99.51889000"
                },
                {
                    "id": 56494,
                    "name": "Kabupaten Lima Puluh Kota",
                    "latitude": "-0.01680000",
                    "longitude": "100.58720000"
                },
                {
                    "id": 56571,
                    "name": "Kabupaten Padang Pariaman",
                    "latitude": "-0.60000000",
                    "longitude": "100.28333000"
                },
                {
                    "id": 56579,
                    "name": "Kabupaten Pasaman",
                    "latitude": "0.42503000",
                    "longitude": "99.94606000"
                },
                {
                    "id": 56580,
                    "name": "Kabupaten Pasaman Barat",
                    "latitude": "0.28152000",
                    "longitude": "99.51965000"
                },
                {
                    "id": 56592,
                    "name": "Kabupaten Pesisir Selatan",
                    "latitude": "-1.58333000",
                    "longitude": "100.85000000"
                },
                {
                    "id": 56631,
                    "name": "Kabupaten Sijunjung",
                    "latitude": "-1.18270000",
                    "longitude": "101.60560000"
                },
                {
                    "id": 56638,
                    "name": "Kabupaten Solok",
                    "latitude": "-0.96667000",
                    "longitude": "100.81667000"
                },
                {
                    "id": 56639,
                    "name": "Kabupaten Solok Selatan",
                    "latitude": "-1.23333000",
                    "longitude": "101.41700000"
                },
                {
                    "id": 56664,
                    "name": "Kabupaten Tanah Datar",
                    "latitude": "-0.45550000",
                    "longitude": "100.57710000"
                },
                {
                    "id": 56746,
                    "name": "Kota Bukittinggi",
                    "latitude": "-0.27500000",
                    "longitude": "100.37500000"
                },
                {
                    "id": 56773,
                    "name": "Kota Padang",
                    "latitude": "-0.98333000",
                    "longitude": "100.45000000"
                },
                {
                    "id": 56774,
                    "name": "Kota Padang Panjang",
                    "latitude": "-0.45000000",
                    "longitude": "100.43333000"
                },
                {
                    "id": 56783,
                    "name": "Kota Pariaman",
                    "latitude": "-0.62682000",
                    "longitude": "100.12047000"
                },
                {
                    "id": 56785,
                    "name": "Kota Payakumbuh",
                    "latitude": "-0.23333000",
                    "longitude": "100.63333000"
                },
                {
                    "id": 56794,
                    "name": "Kota Sawah Lunto",
                    "latitude": "-0.60000000",
                    "longitude": "100.75000000"
                },
                {
                    "id": 56798,
                    "name": "Kota Solok",
                    "latitude": "-0.76667000",
                    "longitude": "100.61667000"
                },
                {
                    "id": 56893,
                    "name": "Padang",
                    "latitude": "-0.94924000",
                    "longitude": "100.35427000"
                },
                {
                    "id": 56917,
                    "name": "Pariaman",
                    "latitude": "-0.61898000",
                    "longitude": "100.11997000"
                },
                {
                    "id": 56923,
                    "name": "Payakumbuh",
                    "latitude": "-0.21590000",
                    "longitude": "100.63340000"
                },
                {
                    "id": 56977,
                    "name": "Sijunjung",
                    "latitude": "-0.70050000",
                    "longitude": "100.97740000"
                },
                {
                    "id": 56993,
                    "name": "Solok",
                    "latitude": "-0.80060000",
                    "longitude": "100.65710000"
                }
            ]
        }
    ]
}

const STYLES = ["Natural", "Modern", "Elegant", "Minimalist", "Tradisional", "New Yorker", "Classic"]

const LOCATIONS = LOCATIONS_DICT.states.map(state => {
    return state["name"];
})

export {ROOM_TYPE, LOCATIONS, LOCATIONS_DICT, STYLES}