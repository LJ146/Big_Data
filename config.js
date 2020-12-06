var config = {
    style: 'mapbox://styles/vvv5/ckhfnc2i20h2y19pjbvs20c17',
    accessToken: 'pk.eyJ1IjoidnZ2NSIsImEiOiJja2dzamx6YmgxMmQ3MnBtbHUzODd2amxyIn0.SdpSPxtxy0v3tjffgSmp4A',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: '1',
            alignment: 'right',
            title: 'Racism and Hate Crime against Asian American in NYC',
            image: 'https://www.kalw.org/sites/kalw/files/styles/medium/public/202005/ER-5MUCVUAANQej_2.jpg',
            description: 'Country-wide panic over the coronavirus has sparked a rise in racist incidents against the Asian American community. Asian-American owned businesses have reported massive losses. Politicians are working to combat the discrimination, but a restaurant owner in New York City Chinatown said "the damage is already done." -- CBS News',
            location: {
                center: [-73.85186, 40.70662],
                zoom: 11.16,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'map-label',
                    opacity: 1
                },
                {
                    layer: 'incident',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: '2',
            alignment: 'right',
            title: 'Vandalism',
            image: 'https://bedfordandbowery.com/wp-content/uploads/2020/03/423F1F3B-0F4A-4149-BB87-B68AA83CA8EE.jpeg',
            description: 'March 18, 2020: In East Village neighborhood in Manhattan, Gem Bing Shop decided to close indefinitely after its street sign was destroyed on March 18. -- Insider',
            location: {
                center: [-73.98986, 40.72952],
                zoom: 15.70,
                pitch: 60.00,
                bearing: -164.80
            },
            onChapterEnter: [
                {
                    layer: 'incident',
                    opacity: 1
                },
                {
                    layer: 'map-label',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: '3',
            alignment: 'right',
            title: 'Racist Graffiti',
            image: 'https://cdn.vox-cdn.com/thumbor/xgMAnW4EBbgqh4iQjedIahRoGeo=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19895388/jeju_noodle_bar.jpeg',
            description: 'April 13, 2020: “Stop eating dogs” was scrawled on the winter vestibule of Michelin-starred Korean restaurant Jeju Noodle Bar over the weekend — an incident that chef and owner Douglas Kim is calling a hate crime. -- Insider',
            location: {
                center: [-74.00754, 40.73288],
                zoom: 15.36,
                pitch: 60.00,
                bearing: 137.03
            },
            onChapterEnter: [
                {
                    layer: 'incident',
                    opacity: 1
                },
                {
                    layer: 'map-label',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: '4',
            alignment: 'right',
            title: 'Anti-Chinese remark and bike throwing',
            image: 'https://pbs.twimg.com/media/EhC2w6eX0AAhDVa?format=jpg&name=small',
            description: 'September 4, 2020: A person riding a bicycle reportedly yelled, "You are Chinese, God hates China, China has virus," at an Asian couple before attacking one of them with the bicycle on Wednesday night in Manhattan. The police are looking for the suspect, who apparently biked by the couple around 8:30 p.m. on September 2nd, in front of 893 Broadway, before making the remarks and then allegedly assaulting the 29-year-old man with the bicycle and a backpack. -- gothamist',
            location: {
                center: [-73.98969, 40.73943],
                zoom: 15.11,
                pitch: 60.00,
                bearing: -166.17
            },
            onChapterEnter: [
                {
                    layer: 'incident',
                    opacity: 1
                },
                {
                    layer: 'map-label',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]

        },
        {
            id: '5',
            alignment: 'right',
            title: 'Asian woman slapped and set on fire',
            image: 'https://hopclear.com/wp-content/uploads/2020/07/chinese_grandma.jpg',
            description: 'July 24, 2020:  An 89-year-old woman says two men never spoke a word to her as they slapped her in the face and then set her clothes on fire in Brooklyn. Surveillance video shows her leaving her home and then only minutes later returning after being set on fire. She says one of the men first slapped her in the face then moments later she felt a sharp pain on her back. -- CBS News',
            location: {
                center: [-74.00216, 40.61525],
                zoom: 14.92,
                pitch: 60.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'incident',
                    opacity: 1
                },
                {
                    layer: 'map-label',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: '6',
            alignment: 'right',
            title: 'Harassment against Asian woman',
            image: 'https://patch.com/img/cdn20/users/23224711/20200428/105710/styles/patch_image/public/1407-20-criminal-mischief-112-pct-04-26-20-photo1___28095202928.jpg?width=705',
            description: 'April 28, 2020: REGO PARK, QUEENS — A man harassed an Asian woman about the new coronavirus, then slapped her phone to the ground as she tried to take a photo of him, according to police. -- NYPD News',
            location: {
                center: [-73.85697, 40.72565],
                zoom: 13.78,
                pitch: 60.00,
                bearing: 27.27
            },
            onChapterEnter: [
                {
                    layer: 'incident',
                    opacity: 1
                },
                {
                    layer: 'map-label',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: '7',
            alignment: 'right',
            title: 'Anti-Asian Remark',
            image: 'https://www.nydailynews.com/resizer/6g3cXYCNGH5nCRCsGO49ZENV8pE=/800x599/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/ZYYKUVVRORFUVDSJQYRUIRRXSE.jpg',
            description: 'June 17, 2020: A white man at a Queens 7-Eleven spouted anti-Asian remarks, then became enraged when a young South Korean man recording video with a cellphone confronted him about his racism. -- New York Daily News',
            location: {
                center: [-73.76547, 40.76108],
                zoom: 14.23,
                pitch: 60.00,
                bearing: -60.87
            },
            onChapterEnter: [
                {
                    layer: 'incident',
                    opacity: 1
                },
                {
                    layer: 'map-label',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        }
    ]
};
