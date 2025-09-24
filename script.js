TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "cardboardMenu": {
   "rollOverOpacity": 0.8,
   "rollOverFontColor": "#FFFFFF",
   "fontColor": "#FFFFFF",
   "opacity": 0.4,
   "label": "Media",
   "backgroundColor": "#404040",
   "fontFamily": "Arial",
   "selectedBackgroundColor": "#202020",
   "rollOverBackgroundColor": "#000000",
   "selectedFontColor": "#FFFFFF",
   "id": "Menu_113406B2_1E4A_9E6B_41A0_025F58342478",
   "class": "Menu",
   "children": [
    {
     "class": "MenuItem",
     "label": "01. 360 ACCESO",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "02. 360 SALON",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "3. 360 PPAL",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "4. 360 MULTIPLE",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "5. barra 360 - SANTA MARIA",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "class": "MenuItem",
     "label": "6. CONECTOR 360 - SANTA MARIA",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "class": "MenuItem",
     "label": "7. COCINA 360 - SANTA MARIA",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "class": "MenuItem",
     "label": "8. TERRAZA 360 - SANTA MARIA",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "class": "MenuItem",
     "label": "9. BAÑO PPAL 360 - SANTA MARIA",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "class": "MenuItem",
     "label": "10. ALCOBA AUX 360 - SANTA MARIA",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    }
   ]
  },
  "id": "panorama_044B84E6_0FDD_0D7B_41AB_B50CA89DF16E",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_044B84E6_0FDD_0D7B_41AB_B50CA89DF16E_t.jpg",
    "overlays": [
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_044B94E6_0FDD_0D7B_4186_C0E7F61B8BB8",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618, this.camera_13E837C1_1E4A_9E29_418D_3E21C7C8E111); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.6,
        "yaw": -10.14,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_044B84E6_0FDD_0D7B_41AB_B50CA89DF16E_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -0.44
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_044B84E6_0FDD_0D7B_41AB_B50CA89DF16E_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_044B84E6_0FDD_0D7B_41AB_B50CA89DF16E.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_044B84E6_0FDD_0D7B_41AB_B50CA89DF16E_t.jpg",
  "class": "Panorama",
  "label": "01. 360 ACCESO",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "buttonCardboardView": {
   "maxHeight": 70,
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "paddingTop": 0,
   "mode": "push",
   "width": "17.15%",
   "height": "76.75%",
   "paddingRight": 0,
   "paddingBottom": 0,
   "shadow": false,
   "maxWidth": 70,
   "transparencyActive": false,
   "cursor": "hand",
   "minWidth": 1,
   "propagateClick": false,
   "verticalAlign": "middle",
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "class": "IconButton",
   "paddingLeft": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "data": {
    "name": "IconButton8475"
   },
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "minHeight": 1
  },
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "gyroscopeEnabled": true,
  "touchControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": false,
  "mouseControlMode": "drag_rotation"
 },
 {
  "id": "panorama_044B84E6_0FDD_0D7B_41AB_B50CA89DF16E_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0.69,
   "pitch": -0.48
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_113406B2_1E4A_9E6B_41A0_025F58342478",
  "id": "panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618_t.jpg",
    "overlays": [
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_044E4048_0FDD_04B7_415C_227D95652A28",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_044B84E6_0FDD_0D7B_41AB_B50CA89DF16E, this.camera_11E3172C_1E4A_9E7F_41A1_E06C8200350F); this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 8.01,
        "yaw": 179.74,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 193,
           "width": 143,
           "url": "media/panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -0.56
       }
      ]
     },
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_044E5048_0FDD_04B7_4190_642C7807C973",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_1E527D4E_1025_3F4B_41A6_43301EADB4E2, this.camera_11FFB706_1E4A_9E2B_41B8_CC8B58A94AAE); this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.6,
        "yaw": 125.52,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618_0_HS_8_0.png"
          }
         ]
        },
        "pitch": -1.19
       }
      ]
     },
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_02E66BF5_0FE5_1B59_4199_1CF026CC3658",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_04D0CDF5_0FE5_1F58_41A1_084837F31BFC, this.camera_11EDD719_1E4A_9E59_41A6_67E8360AEAEF); this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.6,
        "yaw": 86.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618_0_HS_9_0.png"
          }
         ]
        },
        "pitch": -1.19
       }
      ]
     },
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_022B396F_0FE3_0749_41AE_CE090335B525",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_011C86F0_0FE5_0D57_4198_309837CBAA67, this.camera_1108F6F1_1E4A_9FE9_41B8_4984B1013143); this.mainPlayList.set('selectedIndex', 4)"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.59,
        "yaw": -86.76,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618_0_HS_10_0.png"
          }
         ]
        },
        "pitch": -3.2
       }
      ]
     },
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_1FA6DD42_103D_1CB8_4196_0D87A8A00498",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_007627A5_1027_0BF8_41AF_70B42082C03E, this.camera_11D7B73F_1E4A_9E59_41AF_2BDF9FAB052C); this.mainPlayList.set('selectedIndex', 7)"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.59,
        "yaw": -7.88,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618_0_HS_11_0.png"
          }
         ]
        },
        "pitch": -2.7
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618_t.jpg",
  "class": "Panorama",
  "label": "02. 360 SALON",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -7.81,
   "pitch": 2.7
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_113406B2_1E4A_9E6B_41A0_025F58342478",
  "id": "panorama_0245B133_106D_04D8_418D_511AB90BE1EA",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_0245B133_106D_04D8_418D_511AB90BE1EA_t.jpg",
    "overlays": [
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_02459133_106D_04D8_41A1_29566846E8D7",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_0179320A_1067_04C8_41A0_E9144186E562, this.camera_13B22834_1E4A_926F_41A7_56E3379351E2); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.6,
        "yaw": 146.37,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_0245B133_106D_04D8_418D_511AB90BE1EA_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 0.57
       }
      ]
     },
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_0245E133_106D_04D8_419B_3502C1578A8A",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_1E527D4E_1025_3F4B_41A6_43301EADB4E2, this.camera_13B84821_1E4A_9269_41B8_0FCDE165B2C0); this.mainPlayList.set('selectedIndex', 5)"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.6,
        "yaw": -118.17,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_0245B133_106D_04D8_418D_511AB90BE1EA_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -0.94
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_0245B133_106D_04D8_418D_511AB90BE1EA_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_0245B133_106D_04D8_418D_511AB90BE1EA.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0245B133_106D_04D8_418D_511AB90BE1EA_t.jpg",
  "class": "Panorama",
  "label": "3. 360 PPAL",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_0245B133_106D_04D8_418D_511AB90BE1EA_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 173.48,
   "pitch": -6.42
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_113406B2_1E4A_9E6B_41A0_025F58342478",
  "id": "panorama_04D0CDF5_0FE5_1F58_41A1_084837F31BFC",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_04D0CDF5_0FE5_1F58_41A1_084837F31BFC_t.jpg",
    "overlays": [
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_04D0DDF5_0FE5_1F58_41A9_ACA4A4A6264D",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618, this.camera_13A4F847_1E4A_9229_41B8_C2A3BF52EE0A); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 10.11,
        "yaw": -179.85,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 188,
           "width": 180,
           "url": "media/panorama_04D0CDF5_0FE5_1F58_41A1_084837F31BFC_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 1.28
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_04D0CDF5_0FE5_1F58_41A1_084837F31BFC_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_04D0CDF5_0FE5_1F58_41A1_084837F31BFC.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_04D0CDF5_0FE5_1F58_41A1_084837F31BFC_t.jpg",
  "class": "Panorama",
  "label": "4. 360 MULTIPLE",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_04D0CDF5_0FE5_1F58_41A1_084837F31BFC_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_113406B2_1E4A_9E6B_41A0_025F58342478",
  "id": "panorama_011C86F0_0FE5_0D57_4198_309837CBAA67",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_011C86F0_0FE5_0D57_4198_309837CBAA67_t.jpg",
    "overlays": [
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_01F4AD50_0FE5_3F58_419F_F4DF00D622A4",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.6,
        "yaw": 90.35,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_011C86F0_0FE5_0D57_4198_309837CBAA67_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -0.94
       }
      ]
     },
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_1F1E16A5_1025_0DF8_417F_656D8E2952D0",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_10A570DD_1E4E_93D9_41AC_58D30AE215B2, this.camera_13CD77FA_1E4A_9DDB_41B5_F0A73FDBDB63); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6)"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.6,
        "yaw": -89.78,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_011C86F0_0FE5_0D57_4198_309837CBAA67_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 0.06
       }
      ]
     },
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_1F7E5741_1023_0CB9_41AE_E759A71609A8",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_007627A5_1027_0BF8_41AF_70B42082C03E, this.camera_13C7480D_1E4A_9239_41A7_B487C674FE06); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 7)"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.6,
        "yaw": 31.56,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_011C86F0_0FE5_0D57_4198_309837CBAA67_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -1.95
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_011C86F0_0FE5_0D57_4198_309837CBAA67_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_011C86F0_0FE5_0D57_4198_309837CBAA67.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_011C86F0_0FE5_0D57_4198_309837CBAA67_t.jpg",
  "class": "Panorama",
  "label": "5. barra 360 - SANTA MARIA",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_011C86F0_0FE5_0D57_4198_309837CBAA67_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -91.38,
   "pitch": -1.29
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_113406B2_1E4A_9E6B_41A0_025F58342478",
  "id": "panorama_1E527D4E_1025_3F4B_41A6_43301EADB4E2",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_1E527D4E_1025_3F4B_41A6_43301EADB4E2_t.jpg",
    "overlays": [
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_1EB7F2A4_102F_05FF_416A_3479E9378CFE",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_14F3F0A2_1E4B_926B_41BD_909EF960EA9E, this.camera_13F197AF_1E4A_9E79_41B0_6B74940D17B0); this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.6,
        "yaw": 84.07,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_1E527D4E_1025_3F4B_41A6_43301EADB4E2_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -0.44
       }
      ]
     },
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_1E8CE0F7_102F_0559_41AA_D893E86909DD",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_0245B133_106D_04D8_418D_511AB90BE1EA, this.camera_13F5E79C_1E4A_9E5F_41BD_86B48FDA278E); this.mainPlayList.set('selectedIndex', 2)"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.6,
        "yaw": 105.67,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_1E527D4E_1025_3F4B_41A6_43301EADB4E2_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -0.44
       }
      ]
     },
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_1EAAE138_102F_04C8_41AE_3E215CCC446A",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618, this.camera_11C64751_1E4A_9E29_41B3_3DF6C633766C); this.mainPlayList.set('selectedIndex', 1)"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.6,
        "yaw": -91.29,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_1E527D4E_1025_3F4B_41A6_43301EADB4E2_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -1.44
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_1E527D4E_1025_3F4B_41A6_43301EADB4E2_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_1E527D4E_1025_3F4B_41A6_43301EADB4E2.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_1E527D4E_1025_3F4B_41A6_43301EADB4E2_t.jpg",
  "class": "Panorama",
  "label": "6. CONECTOR 360 - SANTA MARIA",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_1E527D4E_1025_3F4B_41A6_43301EADB4E2_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 77.2,
   "pitch": -1.95
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_113406B2_1E4A_9E6B_41A0_025F58342478",
  "id": "panorama_10A570DD_1E4E_93D9_41AC_58D30AE215B2",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_10A570DD_1E4E_93D9_41AC_58D30AE215B2_t.jpg",
    "overlays": [
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_10A560DD_1E4E_93D9_41B4_FA12CFE7AC03",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_011C86F0_0FE5_0D57_4198_309837CBAA67, this.camera_139E9859_1E4A_92D9_41B6_FD345C34EBF3); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.6,
        "yaw": 84.07,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_10A570DD_1E4E_93D9_41AC_58D30AE215B2_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -0.94
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_10A570DD_1E4E_93D9_41AC_58D30AE215B2_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_10A570DD_1E4E_93D9_41AC_58D30AE215B2.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_10A570DD_1E4E_93D9_41AC_58D30AE215B2_t.jpg",
  "class": "Panorama",
  "label": "7. COCINA 360 - SANTA MARIA",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_10A570DD_1E4E_93D9_41AC_58D30AE215B2_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -90.84,
   "pitch": 0.68
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_113406B2_1E4A_9E6B_41A0_025F58342478",
  "id": "panorama_007627A5_1027_0BF8_41AF_70B42082C03E",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_007627A5_1027_0BF8_41AF_70B42082C03E_t.jpg",
    "overlays": [
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_1F6615A3_1025_0FF8_41A1_F5FD8C285ACF",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618, this.camera_138BD882_1E4A_922B_41AC_FBF310EEAB74); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 6.03,
        "yaw": 180,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 106,
           "width": 107,
           "url": "media/panorama_007627A5_1027_0BF8_41AF_70B42082C03E_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -1.67
       }
      ]
     },
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_1FEC42CE_1023_054B_41A7_D3F4B15B2C52",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_011C86F0_0FE5_0D57_4198_309837CBAA67, this.camera_1390B86C_1E4A_92FF_41A6_5E45B4829F23); this.mainPlayList.set('selectedIndex', 4)"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 6.03,
        "yaw": -136.29,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 106,
           "width": 107,
           "url": "media/panorama_007627A5_1027_0BF8_41AF_70B42082C03E_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -1.17
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_007627A5_1027_0BF8_41AF_70B42082C03E_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_007627A5_1027_0BF8_41AF_70B42082C03E.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_007627A5_1027_0BF8_41AF_70B42082C03E_t.jpg",
  "class": "Panorama",
  "label": "8. TERRAZA 360 - SANTA MARIA",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_007627A5_1027_0BF8_41AF_70B42082C03E_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_113406B2_1E4A_9E6B_41A0_025F58342478",
  "id": "panorama_0179320A_1067_04C8_41A0_E9144186E562",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_0179320A_1067_04C8_41A0_E9144186E562_t.jpg",
    "overlays": [
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_013F87AC_1065_0BCF_41A8_1E207399D3BB",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_0245B133_106D_04D8_418D_511AB90BE1EA, this.camera_13E137D4_1E4A_9E2F_41BA_52A357637944); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.6,
        "yaw": -124.95,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_0179320A_1067_04C8_41A0_E9144186E562_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 1.07
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_0179320A_1067_04C8_41A0_E9144186E562_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_0179320A_1067_04C8_41A0_E9144186E562.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0179320A_1067_04C8_41A0_E9144186E562_t.jpg",
  "class": "Panorama",
  "label": "9. BA\u00d1O PPAL 360 - SANTA MARIA",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_0179320A_1067_04C8_41A0_E9144186E562_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_113406B2_1E4A_9E6B_41A0_025F58342478",
  "id": "panorama_14F3F0A2_1E4B_926B_41BD_909EF960EA9E",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_14F3F0A2_1E4B_926B_41BD_909EF960EA9E_t.jpg",
    "overlays": [
     {
      "maps": [],
      "enabledInCardboard": true,
      "id": "overlay_12A02446_1E4D_922B_41B1_50A156883502",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_1E527D4E_1025_3F4B_41A6_43301EADB4E2, this.camera_111A96DD_1E4A_9FD9_41B0_EC7A1C26822E); this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "hfov": 7.6,
        "yaw": -139.27,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 135,
           "url": "media/panorama_14F3F0A2_1E4B_926B_41BD_909EF960EA9E_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -1.95
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_14F3F0A2_1E4B_926B_41BD_909EF960EA9E_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_14F3F0A2_1E4B_926B_41BD_909EF960EA9E.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_14F3F0A2_1E4B_926B_41BD_909EF960EA9E_t.jpg",
  "class": "Panorama",
  "label": "10. ALCOBA AUX 360 - SANTA MARIA",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_14F3F0A2_1E4B_926B_41BD_909EF960EA9E_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_044B84E6_0FDD_0D7B_41AB_B50CA89DF16E",
    "camera": "this.panorama_044B84E6_0FDD_0D7B_41AB_B50CA89DF16E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618",
    "camera": "this.panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_0245B133_106D_04D8_418D_511AB90BE1EA",
    "camera": "this.panorama_0245B133_106D_04D8_418D_511AB90BE1EA_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_04D0CDF5_0FE5_1F58_41A1_084837F31BFC",
    "camera": "this.panorama_04D0CDF5_0FE5_1F58_41A1_084837F31BFC_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_011C86F0_0FE5_0D57_4198_309837CBAA67",
    "camera": "this.panorama_011C86F0_0FE5_0D57_4198_309837CBAA67_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_1E527D4E_1025_3F4B_41A6_43301EADB4E2",
    "camera": "this.panorama_1E527D4E_1025_3F4B_41A6_43301EADB4E2_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_10A570DD_1E4E_93D9_41AC_58D30AE215B2",
    "camera": "this.panorama_10A570DD_1E4E_93D9_41AC_58D30AE215B2_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_007627A5_1027_0BF8_41AF_70B42082C03E",
    "camera": "this.panorama_007627A5_1027_0BF8_41AF_70B42082C03E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_0179320A_1067_04C8_41A0_E9144186E562",
    "camera": "this.panorama_0179320A_1067_04C8_41A0_E9144186E562_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_14F3F0A2_1E4B_926B_41BD_909EF960EA9E",
    "camera": "this.panorama_14F3F0A2_1E4B_926B_41BD_909EF960EA9E_camera",
    "class": "PanoramaPlayListItem",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_044B84E6_0FDD_0D7B_41AB_B50CA89DF16E",
    "camera": "this.panorama_044B84E6_0FDD_0D7B_41AB_B50CA89DF16E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618",
    "camera": "this.panorama_044EA048_0FDD_04B7_419D_69EB7DE3E618_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_0245B133_106D_04D8_418D_511AB90BE1EA",
    "camera": "this.panorama_0245B133_106D_04D8_418D_511AB90BE1EA_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_04D0CDF5_0FE5_1F58_41A1_084837F31BFC",
    "camera": "this.panorama_04D0CDF5_0FE5_1F58_41A1_084837F31BFC_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_011C86F0_0FE5_0D57_4198_309837CBAA67",
    "camera": "this.panorama_011C86F0_0FE5_0D57_4198_309837CBAA67_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_1E527D4E_1025_3F4B_41A6_43301EADB4E2",
    "camera": "this.panorama_1E527D4E_1025_3F4B_41A6_43301EADB4E2_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_10A570DD_1E4E_93D9_41AC_58D30AE215B2",
    "camera": "this.panorama_10A570DD_1E4E_93D9_41AC_58D30AE215B2_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_007627A5_1027_0BF8_41AF_70B42082C03E",
    "camera": "this.panorama_007627A5_1027_0BF8_41AF_70B42082C03E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "media": "this.panorama_0179320A_1067_04C8_41A0_E9144186E562",
    "camera": "this.panorama_0179320A_1067_04C8_41A0_E9144186E562_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 0)",
    "media": "this.panorama_14F3F0A2_1E4B_926B_41BD_909EF960EA9E",
    "camera": "this.panorama_14F3F0A2_1E4B_926B_41BD_909EF960EA9E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.Menu_113406B2_1E4A_9E6B_41A0_025F58342478",
 {
  "id": "camera_111A96DD_1E4A_9FD9_41B0_EC7A1C26822E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -95.93,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_1108F6F1_1E4A_9FE9_41B8_4984B1013143",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -148.44,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_11FFB706_1E4A_9E2B_41B8_CC8B58A94AAE",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 88.71,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_11EDD719_1E4A_9E59_41A6_67E8360AEAEF",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0.15,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_11E3172C_1E4A_9E7F_41A1_E06C8200350F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 169.86,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_11D7B73F_1E4A_9E59_41AF_2BDF9FAB052C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_11C64751_1E4A_9E29_41B3_3DF6C633766C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -54.48,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_13F5E79C_1E4A_9E5F_41BD_86B48FDA278E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 61.83,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_13F197AF_1E4A_9E79_41B0_6B74940D17B0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 40.73,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_13E837C1_1E4A_9E29_418D_3E21C7C8E111",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -0.26,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_13E137D4_1E4A_9E2F_41BA_52A357637944",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -33.63,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_13DB27E8_1E4A_9DE7_41A5_56302B62F774",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 93.24,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_13CD77FA_1E4A_9DDB_41B5_F0A73FDBDB63",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -95.93,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_13C7480D_1E4A_9239_41A7_B487C674FE06",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 43.71,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_13B84821_1E4A_9269_41B8_0FCDE165B2C0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -74.33,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_13B22834_1E4A_926F_41A7_56E3379351E2",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 55.05,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_13A4F847_1E4A_9229_41B8_C2A3BF52EE0A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -93.67,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_139E9859_1E4A_92D9_41B6_FD345C34EBF3",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 90.22,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_1390B86C_1E4A_92FF_41A6_5E45B4829F23",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -148.44,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_138BD882_1E4A_922B_41AC_FBF310EEAB74",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 172.12,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "thumbnailUrl": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904_t.jpg",
  "height": 80,
  "label": "1. EXT 1 - CABA\u00d1A VT1",
  "width": 160,
  "id": "photo_7A1D2634_714C_3CEE_41D0_EA423895C904",
  "class": "Photo",
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904.jpg"
    }
   ]
  }
 },
 {
  "thumbnailUrl": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B_t.jpg",
  "height": 800,
  "label": "2. EXT 2 - CABA\u00d1A VT1",
  "width": 1600,
  "id": "photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B",
  "class": "Photo",
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B.jpg"
    }
   ]
  }
 },
 {
  "thumbnailUrl": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469_t.jpg",
  "height": 800,
  "label": "3. EXT 3 - CABA\u00d1A VT1",
  "width": 1600,
  "id": "photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469",
  "class": "Photo",
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469.jpg"
    }
   ]
  }
 },
 {
  "thumbnailUrl": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC_t.jpg",
  "height": 2000,
  "label": "4. INT 1 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC",
  "class": "Photo",
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC.jpg"
    }
   ]
  }
 },
 {
  "thumbnailUrl": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18_t.jpg",
  "height": 2000,
  "label": "5. INT 2 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_7394633D_781D_12D6_41A4_A0A677937A18",
  "class": "Photo",
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18.jpg"
    }
   ]
  }
 },
 {
  "thumbnailUrl": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6_t.jpg",
  "height": 2000,
  "label": "6. EXT 4 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6",
  "class": "Photo",
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6.jpg"
    }
   ]
  }
 },
 {
  "thumbnailUrl": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C_t.jpg",
  "height": 2000,
  "label": "7. INT 3- CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C",
  "class": "Photo",
  "duration": 5000,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C.jpg"
    }
   ]
  }
 }
], "children": [
 {
  "toolTipBackgroundColor": "#000000",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipTextShadowVerticalLength": 0,
  "progressBackgroundOpacity": 1,
  "paddingRight": 0,
  "progressBarOpacity": 1,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBottom": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "progressHeight": 10,
  "toolTipShadowBlurRadius": 3,
  "shadow": false,
  "progressBorderSize": 0,
  "playbackBarHeight": 10,
  "toolTipPaddingTop": 9,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 0,
  "toolTipTextShadowHorizontalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "progressLeft": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipOpacity": 0.7,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarBorderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "transitionDuration": 500,
  "playbackBarLeft": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarRight": 0,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "toolTipBorderRadius": 1,
  "paddingTop": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowBlurRadius": 3,
  "width": "100%",
  "height": "100%",
  "toolTipBorderSize": 0,
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 14,
  "toolTipFontSize": 13,
  "playbackBarHeadHeight": 15,
  "toolTipDisplayTime": 600,
  "paddingBottom": 0,
  "toolTipFontColor": "#FFFFFF",
  "toolTipShadowOpacity": 0,
  "playbackBarProgressBorderSize": 0,
  "top": 0,
  "paddingLeft": 0,
  "minWidth": 100,
  "propagateClick": false,
  "progressBarBorderColor": "#000000",
  "transitionMode": "blending",
  "toolTipFontFamily": "Arial",
  "progressBarBorderRadius": 0,
  "playbackBarBottom": 5,
  "id": "MainViewer",
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "progressOpacity": 1,
  "toolTipPaddingRight": 14,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBorderColor": "#000000",
  "playbackBarHeadShadowColor": "#000000",
  "left": 0,
  "playbackBarHeadOpacity": 1,
  "borderRadius": 0,
  "playbackBarHeadShadow": true,
  "toolTipTextShadowOpacity": 1,
  "toolTipPaddingBottom": 9,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "minHeight": 50,
  "playbackBarHeadBorderSize": 0
 },
 {
  "layout": "horizontal",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "width": "22.545%",
  "gap": 1,
  "paddingRight": 0,
  "paddingBottom": 0,
  "shadow": false,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "top": "89%",
  "minWidth": 265,
  "bottom": "3%",
  "verticalAlign": "middle",
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "class": "Container",
  "overflow": "visible",
  "paddingLeft": 0,
  "borderSize": 0,
  "scrollBarMargin": 2,
  "borderRadius": 5,
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "--Settings Button Set"
  },
  "horizontalAlign": "right",
  "backgroundOpacity": 0,
  "right": 25,
  "creationPolicy": "delayed",
  "children": [
   {
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "width": "75.269%",
    "gap": 10,
    "height": "100%",
    "paddingRight": 0,
    "paddingBottom": 0,
    "shadow": false,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "minWidth": 1,
    "propagateClick": false,
    "verticalAlign": "middle",
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "class": "Container",
    "overflow": "visible",
    "paddingLeft": 0,
    "borderSize": 0,
    "horizontalAlign": "right",
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "-Hide buttons"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "layout": "horizontal",
    "creationPolicy": "delayed",
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "maxHeight": 70,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "paddingTop": 0,
      "toolTipBackgroundColor": "#000000",
      "toolTipTextShadowBlurRadius": 3,
      "mode": "toggle",
      "width": "17.48%",
      "toolTipTextShadowVerticalLength": 0,
      "height": "76.75%",
      "paddingRight": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "paddingBottom": 0,
      "toolTipFontColor": "#FFFFFF",
      "toolTip": "Full Screen",
      "maxWidth": 70,
      "toolTipDisplayTime": 600,
      "toolTipPaddingTop": 9,
      "toolTipShadowColor": "#333333",
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "cursor": "hand",
      "minWidth": 1,
      "propagateClick": false,
      "verticalAlign": "middle",
      "toolTipFontFamily": "Arial",
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "class": "IconButton",
      "toolTipOpacity": 0.7,
      "toolTipPaddingRight": 14,
      "paddingLeft": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "data": {
       "name": "Icon fullscreen"
      },
      "toolTipPaddingBottom": 9,
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "toolTipBorderRadius": 1,
      "minHeight": 1
     },
     {
      "maxHeight": 70,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "paddingTop": 0,
      "toolTipBackgroundColor": "#000000",
      "toolTipTextShadowBlurRadius": 3,
      "mode": "toggle",
      "width": "17.15%",
      "toolTipTextShadowVerticalLength": 0,
      "height": "76.75%",
      "paddingRight": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "paddingBottom": 0,
      "toolTipFontColor": "#FFFFFF",
      "toolTip": "Audio On/Off",
      "maxWidth": 70,
      "toolTipDisplayTime": 600,
      "toolTipPaddingTop": 9,
      "toolTipShadowColor": "#333333",
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "cursor": "hand",
      "minWidth": 1,
      "propagateClick": false,
      "verticalAlign": "middle",
      "toolTipFontFamily": "Arial",
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "class": "IconButton",
      "toolTipOpacity": 0.7,
      "toolTipPaddingRight": 14,
      "paddingLeft": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "data": {
       "name": "Icon audio"
      },
      "toolTipPaddingBottom": 9,
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "toolTipBorderRadius": 1,
      "minHeight": 1
     }
    ],
    "minHeight": 1
   }
  ],
  "minHeight": 50
 },
 {
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "width": "21%",
  "gap": 10,
  "height": "25%",
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "shadow": false,
  "contentOpaque": false,
  "top": "3.5%",
  "minWidth": 300,
  "propagateClick": false,
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "id": "Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
  "class": "Container",
  "overflow": "visible",
  "paddingLeft": 0,
  "borderSize": 0,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "--Stickers Container"
  },
  "left": "2.14%",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "layout": "vertical",
  "creationPolicy": "delayed",
  "minHeight": 120
 },
 {
  "selectedItemThumbnailShadowBlurRadius": 10,
  "itemHorizontalAlign": "center",
  "backgroundColor": [
   "#000000"
  ],
  "itemLabelPosition": "bottom",
  "itemLabelGap": 9,
  "paddingRight": 15,
  "itemBorderRadius": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontColor": "#FFFFFF",
  "backgroundColorRatios": [
   0
  ],
  "selectedItemLabelFontWeight": "bold",
  "shadow": false,
  "itemOpacity": 1,
  "scrollBarColor": "#52B7EF",
  "itemThumbnailShadow": false,
  "rollOverItemLabelFontColor": "#FFFFFF",
  "rollOverItemLabelFontWeight": "bold",
  "scrollBarOpacity": 1,
  "itemBackgroundOpacity": 0,
  "itemThumbnailWidth": 80,
  "scrollBarMargin": 4,
  "selectedItemBackgroundColor": [],
  "layout": "vertical",
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelFontStyle": "normal",
  "itemThumbnailBorderRadius": 50,
  "rollOverItemLabelTextDecoration": "underline",
  "itemVerticalAlign": "middle",
  "itemLabelFontWeight": "normal",
  "itemPaddingLeft": 3,
  "selectedItemLabelFontStyle": "italic",
  "backgroundColorDirection": "vertical",
  "paddingTop": 20,
  "itemThumbnailOpacity": 1,
  "scrollBarWidth": 7,
  "selectedItemBackgroundOpacity": 0,
  "gap": 10,
  "height": "82.127%",
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "itemLabelTextDecoration": "none",
  "selectedItemBorderSize": 0,
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "itemPaddingBottom": 3,
  "selectedItemLabelTextDecoration": "underline",
  "itemPaddingRight": 3,
  "itemBackgroundColorDirection": "vertical",
  "selectedItemLabelFontSize": 12,
  "maxWidth": 150,
  "paddingBottom": 20,
  "selectedItemLabelFontColor": "#FFFFFF",
  "verticalAlign": "top",
  "top": "3.5%",
  "paddingLeft": 15,
  "itemBackgroundColorRatios": [],
  "minWidth": 1,
  "itemBackgroundColor": [],
  "selectedItemThumbnailShadowVerticalLength": 0,
  "itemMode": "normal",
  "selectedItemBackgroundColorRatios": [],
  "propagateClick": false,
  "itemThumbnailHeight": 80,
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "class": "ThumbnailList",
  "visible": false,
  "horizontalAlign": "left",
  "itemPaddingTop": 3,
  "borderSize": 0,
  "selectedItemBorderRadius": 0,
  "data": {
   "name": "-ThumbnailList"
  },
  "itemLabelFontFamily": "Arial",
  "selectedItemThumbnailShadowOpacity": 0.73,
  "scrollBarVisible": "rollOver",
  "itemLabelFontSize": 12,
  "selectedItemThumbnailShadow": true,
  "right": "2%",
  "borderRadius": 3,
  "backgroundOpacity": 0.25,
  "minHeight": 1
 },
 {
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "width": "37.394%",
  "gap": 1,
  "height": 92,
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "shadow": false,
  "contentOpaque": false,
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "bottom": "3%",
  "verticalAlign": "bottom",
  "propagateClick": false,
  "id": "Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
  "class": "Container",
  "overflow": "visible",
  "paddingLeft": 0,
  "borderSize": 0,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "-Discover Container"
  },
  "left": "2%",
  "horizontalAlign": "left",
  "backgroundOpacity": 0,
  "layout": "vertical",
  "creationPolicy": "delayed",
  "children": [
   {
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "width": "100%",
    "gap": 10,
    "height": "55.435%",
    "paddingRight": 0,
    "paddingBottom": 0,
    "shadow": false,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "minWidth": 1,
    "propagateClick": false,
    "verticalAlign": "middle",
    "id": "Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B",
    "class": "Container",
    "overflow": "visible",
    "paddingLeft": 0,
    "borderSize": 0,
    "horizontalAlign": "left",
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "Container Content"
    },
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "layout": "horizontal",
    "creationPolicy": "delayed",
    "minHeight": 1
   }
  ],
  "minHeight": 1
 },
 {
  "maxHeight": 265,
  "paddingTop": 0,
  "width": "5%",
  "height": "5%",
  "paddingRight": 0,
  "paddingBottom": 0,
  "shadow": false,
  "maxWidth": 485,
  "scaleMode": "fit_inside",
  "url": "skin/Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D.png",
  "top": "0.98%",
  "minWidth": 1,
  "propagateClick": false,
  "verticalAlign": "middle",
  "id": "Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D",
  "class": "Image",
  "paddingLeft": 0,
  "borderSize": 0,
  "horizontalAlign": "center",
  "data": {
   "name": "Image21736"
  },
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "right": "0.6%",
  "minHeight": 1
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "gap": 10,
 "height": "100%",
 "paddingRight": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "minWidth": 20,
 "propagateClick": false,
 "paddingBottom": 0,
 "id": "rootPlayer",
 "verticalAlign": "top",
 "class": "Player",
 "overflow": "visible",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "data": {
  "name": "Player463"
 },
 "scripts": {
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "existsKey": function(key){  return key in window; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "unregisterKey": function(key){  delete window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getKey": function(key){  return window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); }
 },
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.85,
 "backgroundPreloadEnabled": true,
 "creationPolicy": "delayed",
 "minHeight": 20,
 "mouseWheelEnabled": true
})