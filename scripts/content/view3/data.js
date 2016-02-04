var data = {
    "name": "flare",
    "children": [
        {
            "name": "analytics",
            "children": [
                {
                    "name": "cluster",
                    "children": [
                        {"name": "AgglomerativeCluster"},
                        {"name": "CommunityStructure"},
                        {"name": "HierarchicalCluster"},
                        {"name": "MergeEdge"}
                    ]
                },
                {
                    "name": "graph",
                    "children": [
                        {"name": "BetweennessCentrality"},
                        {"name": "LinkDistance"},
                        {"name": "MaxFlowMinCut"},
                        {"name": "ShortestPaths"},
                        {"name": "SpanningTree"}
                    ]
                },
                {
                    "name": "optimization",
                    "children": [
                        {"name": "AspectRatioBanker"}
                    ]
                }
            ]
        }
    ]
};


var m1 =
{
    "id": "E4B64F36-783E-40A5-B173-603E591B58A0",
    "timeInserted": "2016-01-11T15:24:39.958+0000",
    "timeUpdated": "2016-01-11T15:24:39.958+0000",
    "version": 1,
    "name": "ArrayOfWeatherDescription",
    "namespace": "http://ws.cdyne.com/WeatherWS/",
    "childElements": [
        {
            "id": "3D20E0C6-BD6E-4A37-802F-5A93DFF7BDFF",
            "timeInserted": "2016-01-11T15:24:39.958+0000",
            "timeUpdated": "2016-01-11T15:24:39.958+0000",
            "version": 1,
            "name": "WeatherDescription",
            "type": "COMPLEX",
            "complexType": {
                "id": "30F4F073-6BA0-4C01-A700-D8439887FDDB",
                "timeInserted": "2016-01-11T15:24:39.958+0000",
                "timeUpdated": "2016-01-11T15:24:39.958+0000",
                "version": 1,
                "name": "WeatherDescription",
                "namespace": "http://ws.cdyne.com/WeatherWS/",
                "childElements": [
                    {
                        "id": "CE490B82-4120-40E9-B839-62E6DC4BB767",
                        "timeInserted": "2016-01-11T15:24:39.964+0000",
                        "timeUpdated": "2016-01-11T15:24:39.964+0000",
                        "version": 1,
                        "name": "WeatherID",
                        "type": "SIMPLE",
                        "simpleType": "short"
                    },
                    {
                        "id": "58C4B98B-F498-4C22-996C-692CF0D2FE26",
                        "timeInserted": "2016-01-11T15:24:39.965+0000",
                        "timeUpdated": "2016-01-11T15:24:39.965+0000",
                        "version": 1,
                        "name": "Description",
                        "type": "SIMPLE",
                        "simpleType": "string"
                    },
                    {
                        "id": "00D5A4F7-2EAC-4A36-A1DC-811C0D9E16D5",
                        "timeInserted": "2016-01-11T15:24:39.965+0000",
                        "timeUpdated": "2016-01-11T15:24:39.965+0000",
                        "version": 1,
                        "name": "PictureURL",
                        "type": "SIMPLE",
                        "simpleType": "string"
                    }
                ],
                "hasJavadoc": false
            }
        }
    ],
    "hasJavadoc": false
};


var m2 =
{
    "id": "E02F02D3-F121-4C43-BDAA-7A12D829B35A",
    "timeInserted": "2016-01-11T15:24:39.969+0000",
    "timeUpdated": "2016-01-11T15:24:39.969+0000",
    "version": 1,
    "name": "Forecast",
    "namespace": "http://ws.cdyne.com/WeatherWS/",
    "childElements": [
        {
            "id": "88A614CA-3E42-4609-B63A-5898420826BC",
            "timeInserted": "2016-01-11T15:24:39.970+0000",
            "timeUpdated": "2016-01-11T15:24:39.970+0000",
            "version": 1,
            "name": "Date",
            "type": "SIMPLE",
            "simpleType": "dateTime"
        },
        {
            "id": "BE7A5C3B-B9D1-4376-82E4-48D95D496716",
            "timeInserted": "2016-01-11T15:24:39.970+0000",
            "timeUpdated": "2016-01-11T15:24:39.970+0000",
            "version": 1,
            "name": "Desciption",
            "type": "SIMPLE",
            "simpleType": "string"
        },
        {
            "id": "2CFD57BD-4E52-46CF-AF1D-1DDCB2297AE9",
            "timeInserted": "2016-01-11T15:24:39.970+0000",
            "timeUpdated": "2016-01-11T15:24:39.970+0000",
            "version": 1,
            "name": "WeatherID",
            "type": "SIMPLE",
            "simpleType": "short"
        },
        {
            "id": "EFE2BE29-6D41-4214-93E6-3361245C3B5C",
            "timeInserted": "2016-01-11T15:24:39.971+0000",
            "timeUpdated": "2016-01-11T15:24:39.971+0000",
            "version": 1,
            "name": "ProbabilityOfPrecipiationa",
            "type": "COMPLEX",
            "complexType": {
                "id": "B7467D71-A6A1-41BF-AAA2-96D48999A117",
                "timeInserted": "2016-01-11T15:24:39.972+0000",
                "timeUpdated": "2016-01-11T15:24:39.972+0000",
                "version": 1,
                "name": "POP",
                "namespace": "http://ws.cdyne.com/WeatherWS/",
                "childElements": [
                    {
                        "id": "02AF697E-48FF-440E-B702-C3FD62568E84",
                        "timeInserted": "2016-01-11T15:24:39.972+0000",
                        "timeUpdated": "2016-01-11T15:24:39.972+0000",
                        "version": 1,
                        "name": "Daytime",
                        "type": "SIMPLE",
                        "simpleType": "string"
                    },
                    {
                        "id": "F138E119-055C-4B40-9A49-7E1539163CCA",
                        "timeInserted": "2016-01-11T15:24:39.972+0000",
                        "timeUpdated": "2016-01-11T15:24:39.972+0000",
                        "version": 1,
                        "name": "Nighttime",
                        "type": "SIMPLE",
                        "simpleType": "string"
                    }
                ],
                "hasJavadoc": false
            }
        },
        {
            "id": "700314B4-3FF2-4547-9052-4DC7C2274FF0",
            "timeInserted": "2016-01-11T15:24:39.970+0000",
            "timeUpdated": "2016-01-11T15:24:39.970+0000",
            "version": 1,
            "name": "Temperatures",
            "type": "COMPLEX",
            "complexType": {
                "id": "0CAAB2A2-255A-4E4C-834B-B236A3FF8C27",
                "timeInserted": "2016-01-11T15:24:39.971+0000",
                "timeUpdated": "2016-01-11T15:24:39.971+0000",
                "version": 1,
                "name": "temp",
                "namespace": "http://ws.cdyne.com/WeatherWS/",
                "childElements": [
                    {
                        "id": "363EC65B-6277-42F2-9517-784B6A5CA4E1",
                        "timeInserted": "2016-01-11T15:24:39.971+0000",
                        "timeUpdated": "2016-01-11T15:24:39.971+0000",
                        "version": 1,
                        "name": "MorningLow",
                        "type": "SIMPLE",
                        "simpleType": "string"
                    },
                    {
                        "id": "73290408-1FD6-4B7E-92FF-57F982F565D5",
                        "timeInserted": "2016-01-11T15:24:39.971+0000",
                        "timeUpdated": "2016-01-11T15:24:39.971+0000",
                        "version": 1,
                        "name": "DaytimeHigh",
                        "type": "SIMPLE",
                        "simpleType": "string"
                    }
                ],
                "hasJavadoc": false
            }
        }
    ],
    "hasJavadoc": false
};
