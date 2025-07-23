# Mapping vacant storefronts in Greenpoint

While walking around in my neighborhood, I noticed a lot of vacant storefronts even though Greenpoint is considered to be the up and coming. Is it more than usual? Or does it just seem a lot? This project explores these questions. 

The repository contains the data processing and visualization pipeline for the project Mapping Greenpoint’s Empty Storefronts, an interactive scrollytelling map created with the Mapbox Storytelling template. The repository does not contain any raw data due to restrictions from the data provider. 


### Analysis: 
- __storefronts_geocoding.ipynb__: Jupyter notebook used to clean and geocode storefront data.Includes merging with building footprints and preparing GeoJSON layers for the map.
- __census_data_clean.ipynb__: Jupyter notebook used to process block group and census data, aggregating vacancy information and preparing the layers used for block‑group level analysis.

### Data sources:

__Vacant storefronts__
The data comes from the collection maintained by the company LiveXYZ, which catalogs storefronts across New York City.Data is collected through ground surveys on a rolling 90‑day basis. In addition to vacancy status, [LiveXYZ](https://www.livexyz.com/aboutlive) records the type of business and other details. A map of the full dataset is available at livexyz.com.
__Building footprints__
The building shapes come from the NYC Open Data Building Footprints dataset.
__Block groups__
The block groups are identical to the official Census geometries.
__Limitations__
For the analysis, the store locations were merged with the building footprints using GeoPandas.Every point inside or within five meters of a building footprint was assigned to that building.Locations without nearby points (around 30, such as gas stations and industrial areas) were filtered out.The street‑level analysis was carried out in QGIS.

### Credits
* Data sources: 
    [LiveXYZ](https://www.livexyz.com/), [NYC Open Data](https://data.cityofnewyork.us/City-Government/Building-Footprints-Map-/jh45-qr5r), [US Census](https://www.census.gov/cgi-bin/geo/shapefiles/index.php)
* Analysis: GeoPandas and QGIS.
* Visualization: Mapbox Storytelling template.



