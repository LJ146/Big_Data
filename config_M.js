var config = {
    style: 'mapbox://styles/vvv5/ckidlidfq2se11akum7jk5sb7',
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
            title: '',
            image: '',
            description: '',
            location: {
                center: [-73.99465, 40.71595],
                zoom: 14.8,
                pitch: 0.50,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'close_all',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: '2',
            alignment: 'right',
            title: '',
            image: '',
            description: '',
            location: {
                center: [-73.99465, 40.71595],
                zoom: 14.8,
                pitch: 0.50,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'close_all',
                    opacity: 1
                }
            ],
            onChapterExit: [
            ]
        }
    ]
};