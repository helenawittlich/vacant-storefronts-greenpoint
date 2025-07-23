var config = {
    style: 'mapbox://styles/helena-wittlich/cmdbu3jlf009o01s2cajk7uew',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiaGVsZW5hLXdpdHRsaWNoIiwiYSI6ImNtYnprcW5hYzEyaTUya3BzcTNuYmxlMWUifQ.81DTWlxDkwWts1GF0wGHyA',
    //showMarkers: true,
    // markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    //inset: true,
   // insetOptions: {
      //  markerColor: 'orange'
   // },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Mapping Greenpoint’s Empty Storefronts',
    subtitle: 'Even though vacancy rates are trending down more than three years after the pandemic, a walk in the neighborhood still shows empty windows. Is there more to it than just consequences of the pandemic? ',
    byline: 'An exploration by <a href="https://helenawittlich.com/">Helena Wittlich</a>',
    footer: '<h2>About the data</h2><br><b>Vacant storefronts:</b>The data comes from the collection maintained by the company LiveXYZ, which catalogs storefronts across New York City. Data is collected through ground surveys on a rolling 90‑day basis. In addition to vacancy status, LiveXYZ records the type of business and other details. A map of the full dataset is available at <a href="livexyz.com">livexyz.com</a>.<br><b>Building footprints: </b>The building shapes come from the <a href="https://data.cityofnewyork.us/City-Government/Building-Footprints-Map-/jh45-qr5r">Building Footprints</a> dataset provided by NYC Open Data. <br><b>Block groups: </b><a href="https://www.census.gov/cgi-bin/geo/shapefiles/index.php">The block groups</a> are identical to the official Census data.<br><b>The analysis: </b>For the analysis, the store locations were merged with the building footprints using GeoPandas. Every point inside or within five meters of a building footprint was assigned to that building. Locations without nearby points (around 30, such as gas stations and industrial areas) were filtered out.The street‑level analysis was carried out in QGIS.<br><br><b>Fotocredits</b>: Helena Wittlich <br><br><b>Many thanks to LiveXYZ for providing the data on Greenpoint.</b><br><br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'empty-first-id',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-73.95332, 40.72623],
                zoom: 13.99,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'all-buildings',
                opacity: 1,
                duration: 2000
                }
            ],
            onChapterExit: [

            ]
        },
            {
            id: 'first-id',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'assets/home.jpeg',
            description: 'The <b><span style="display:inline-block;width:12px;height:12px;background:#9b51e0;margin-right:4px;vertical-align:middle;"></span><span style="color:#9b51e0;">store downstairs from my apartment</span></b> has been vacant since I moved in a year ago. Friends have told me that it’s been empty since the pandemic.',
            location: {
                center: [-73.95206, 40.72619],
                zoom: 19.29,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: '',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'home',
                opacity: 1,
                duration: 2000
                }, 
                {
                layer: '730MA',
                opacity: 1,
                duration: 2000
                }, 
                { 
                layer: 'all-buildings',             
                opacity: 1,
                duration: 1000
                }, 
            ],
            onChapterExit: [
                {
                layer: '730MA',
                opacity: 0,
                duration: 1000
                }, 
            ]
        },
        {
            id: 'two-id',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'assets/subway.jpg',
            description: 'On my way to the <b><img src="assets/g.svg" style="width:16px; height:16px; vertical-align:middle; margin-right:4px;">subway</span></b>, I noticed twelve <b><span style="display:inline-block;width:12px;height:12px;background:#E4572E;margin-right:4px;vertical-align:middle;"></span><span style="color:#E4572E;">vacant storefronts</span></b>. At the same time, Greenpoint is considered an up‑and‑coming neighborhood; last year, <a href="https://www.forbes.com/sites/rogersands/2024/06/06/neighborhood-to-watch-greenpoint-brooklyn-new-york/">Forbes</a> listed Greenpoint as a “neighborhood to watch” in 2024.',
            location: {
                center: [-73.95220, 40.72503],
                zoom: 16.94,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: '',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'subway',
                opacity: 1,
                duration: 1000
                }, 
                {
                layer: 'subway_icon',
                opacity: 1,
                duration: 1000
                },
                { 
                layer: 'all-buildings',             
                opacity: 1,
                duration: 1000
                }, 
                { 
                layer: 'all-buildings',             
                opacity: 1,
                duration: 1000
                }, 
            ],
            onChapterExit: [
                {
                layer: 'subway',
                opacity: 0
                }, 
                {
                layer: 'subway_icon',
                opacity: 0,
                duration: 1000
                },
                {
                     layer: 'home',
                     opacity: 0
                }
            ]
        },
        {
            id: 'three-id',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Greenpoint has more than 5,000 <b><span style="display:inline-block;width:12px;height:12px;background:#b3b3b3;margin-right:4px;vertical-align:middle;"></span><span style="color:#b3b3b3;">buildings</span></b>, and according to data from the company LiveXYZ, roughly a quarter of them have <b><span style="display:inline-block;width:12px;height:12px;background:#2e86ab;margin-right:4px;vertical-align:middle;"></span><span style="color:#2e86ab;">storefronts</span></b>.',
            location: {
                center: [-73.95563, 40.72822],
                zoom: 14.40,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: '',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { 
                layer: 'all-buildings',             
                opacity: 1,
                duration: 1000
                }, 
                {
                layer: 'stores',           
                opacity: 1,
                duration: 1000
                }
            ],
            onChapterExit: [
                { 
                layer: 'all-buildings',             
                opacity: 1,
                duration: 1000
                }, 
                {
                layer: 'stores',           
                opacity: 1,
                duration: 1000
                }
            ]
        },
        {
            id: 'four-id',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'assets/vacancy-2.svg',
            description: 'According to LiveXYZ data, 11.6% of the shops in Greenpoint are <b><span style="display:inline-block;width:12px;height:12px;background:#e4572e;margin-right:4px;vertical-align:middle;"></span><span style="color:#e4572e;">vacant</span></b> — slightly above the NYC average of 11.1% and just below Brooklyn’s 11.9%. In numbers: 145 of 1,252 shops are registered as vacant. So why does Manhattan Avenue feel so empty?', 
            location: {
                center: [-73.95563, 40.72822],
                zoom: 14.40,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: '',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { 
                layer: 'all-buildings',             
                opacity: 1,
                duration: 2000
                }, 
                { 
                layer: 'stores',             
                opacity: 1,
                duration: 2000
                }, 
                {
                layer: 'unoccupied',           
                opacity: 1,
                duration: 2000
                }
            ],
            onChapterExit: [
                { 
                layer: 'all-buildings',             
                opacity: 0,
                duration: 1000
                }, 
                { 
                layer: 'stores',             
                opacity: 0,
                duration: 1000
                }, 
                {
                layer: 'unoccupied',           
                opacity: 0,
                duration: 1000
                }
            ]
        },
        {
            id: 'five-id',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Looking only at the shops on this street, it becomes more obviouis: <span><span style="display:inline-block;width:12px;height:12px;background:#e4572e;margin-right:4px;vertical-align:middle;"></span><span style="display:inline-block;width:12px;height:12px;background:#2e86ab;margin-right:6px;vertical-align:middle;"></span><b>Manhattan Avenue</b></span> has a significantly higher <b><span style="color:#e4572e;">vacancy</span></b> rate — <b>15.5 percent</b>.',
            location: {
                center: [-73.95380, 40.72889],
                zoom: 14.82,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: '',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { 
                layer: 'manhattan-all',             
                opacity: 1,
                duration: 1000
                }, 
                { 
                layer: 'manhattan-stores',             
                opacity: 1,
                duration: 1000
                }, 
                {
                layer: 'manhattan-unoccupied',           
                opacity: 1,
                duration: 1000
                }
            ],
            onChapterExit: [
                { 
                layer: 'manhattan-all',             
                opacity: 0,
                duration: 1000
                }, 
                { 
                layer: 'manhattan-stores',             
                opacity: 0,
                duration: 1000
                }, 
                {
                layer: 'manhattan-unoccupied',           
                opacity: 0,
                duration: 1000
                }
            ]
        },        {
            id: 'six-id',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Aggregated by block group, <b><span><span style="display:inline-block;width:15px;height:15px;background:#E4572E;border-radius:50%;margin-right:6px;vertical-align:middle;"></span>vacancies</span></b> cluster along the border with Williamsburg. One reason could be higher rents—according to <a href="https://therealdeal.com/new-york/2022/10/10/brooklyn-office-rents-rise-and-tenants-dump-space-on-market/">The Real Deal</a>, Williamsburg and Greenpoint average $67.28 per square foot, compared to $51.91 in Brooklyn. Hard to verify, though: few listings show prices, and many empty shops aren’t listed at all.',
            location: {
                center: [-73.95563, 40.72822],
                zoom: 14.40,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: '',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'bubbles',
                opacity: 1,
                duration: 1000
                }, 
                { 
                layer: 'all-buildings',             
                opacity: 0,
                duration: 1000
                }, 
                { 
                layer: 'stores',             
                opacity: 0,
                duration: 1000
                }, 
                {
                layer: 'unoccupied',           
                opacity: 0,
                duration: 1000
                }, 
                {
                layer: 'home',           
                opacity: 0,
                duration: 1000
                },
                {
                layer: 'polka-dot',           
                opacity: 0,
                duration: 1000
                },
            ],
            onChapterExit: [
                {
                layer: 'bubbles',
                opacity: 0,
                duration: 1000
                }
            ]
        },
        {
            id: 'seven-id',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'assets/greenpoint-bank.jpeg',
            description: 'Either way, the neighborhood is changing so quickly that the data can’t keep up, even though it’s updated every 90 days. The <b><span style="display:inline-block;width:12px;height:12px;background:#00bfae;margin-right:4px;vertical-align:middle;"></span><span style="color:#00bfae;">Greenpoint Savings Bank</span></b>, still listed as vacant, has recently become a luxury cannabis dispensary.',
            location: {
                center: [-73.95387, 40.72772],
                zoom: 17.92,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: '',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'greenpoint-bank',           
                opacity: 1,
                duration: 1000
                },
                { 
                layer: 'all-buildings',             
                opacity: 1,
                duration: 1000
                }, 
                { 
                layer: 'stores',             
                opacity: 1,
                duration: 1000
                }, 
                {
                layer: 'unoccupied',           
                opacity: 1,
                duration: 1000
                }
            ],
            onChapterExit: [
                {
                layer: 'greenpoint-bank',           
                opacity: 0,
                duration: 1000
                }, 
                {
                layer: 'gpb',           
                opacity: 0,
                duration: 1000
                }
            ]
        },
        {
            id: 'eight-id',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'assets/polka.jpeg',
            description: 'And just next to <b><span style="display:inline-block;width:12px;height:12px;background:#9b51e0;margin-right:4px;vertical-align:middle;"></span><span style="color:#9b51e0;">my apartment</span></b>, a <b><span style="display:inline-block;width:12px;height:12px;background:#ffd700;margin-right:4px;vertical-align:middle;"></span><span style="color:#ffd700;">Polish restaurant</span></b> had to close a few weeks ago after 30 years in business. In the data, it’s still listed as open. Now the entire building is up for sale.',
            location: {
                center: [-73.95206, 40.72619],
                zoom: 19.29,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: '',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'home',           
                opacity: 1,
                duration: 1000
                },
                {
                layer: 'polka-dot',           
                opacity: 1,
                duration: 1000
                },
                { 
                layer: 'all-buildings',             
                opacity: 1,
                duration: 1000
                }, 
                { 
                layer: 'stores',             
                opacity: 1,
                duration: 1000
                }, 
                {
                layer: 'unoccupied',           
                opacity: 1,
                duration: 1000
                }
            ],
            onChapterExit: [
                {
                }
            ]
        },
    ]
};
