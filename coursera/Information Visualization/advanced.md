# **Information Visualization: Advanced Techniques**

### Geographical Data

* **Spacial Objects** \- counties\, regions\, buildings\, lakes
    * geographical shape and extent that matters for the viz
    * the map is the main object of interest
    * states of the USA each state is a spacial object
    * roads on a map
* **Non-Spatial Geolocated** \- cars\, animals\, weather stations
    * shape does not matter
    * map is used as a reference to see where these objects are located
    * a dot on a map that represents a bike in manhattan map

###### Types of gerographical data
<br>
* **Regions** \- country borders
* **Locations** \- lat and lng
* **Identifiers** \- zipcode\, street name\, borough

Geocoding - identifier > loaction (bike station id get the lat/lng)
Reverse Geocoding - location > identifier (mark a location on a map and give it a bike station identifier)
<br>
##### When/why use a map?
<br>
you dont always have to use a map when dealing with geo data

When is it appropriate/desirable?

* **Maps represent space by using space** \- space cannot be used to encode other types of information
* **Example for NOT desirable** \- encodign the *quantative* sales of a company in different regions (cities) you could encode the *magnitude* of sales as *size* of a legend (circle) on a map where the regions are located. Which would be NOT effective. Or you could represent the *magnitude* of sales as the *size* of a bar in a bar chart. Which would be more effective.
* **Example when it is desirable?**
    * When the question is inherently spatial
        * questions that correlate a phenomenon to spatial locations/objects (do citi bike commuters tend to sdrop their bikes in proximity of subway stations?)
        * <span class="colour" style="color: rgb(192, 204, 219);">when the question pertain a phenomenon for which spatial proximity or extent is relevant (how far has the epidemic extended from its point of origin?)</span>
    * When the map helps find information (when familiararity matters) (election maps) (you want to find your own city on the map)

Maps are not always the best or only solution
Do I need a map here? if yes, Why?
<br>
##### Types of maps
<br>
* **Dot Map** (distibution of objects)
    * a dot represents specific events or objects that or geo located.
    * each item is mapped to its location
    * good for showing distribution of objects geographically - you can extract *distribution* and *density*.
    * can encode some additional categorical value with a color
* **Heat Map** (dist of values, continuous)
    * represent continuous spatial distribution of a quantity (*frequency* or *density*)
    * doesnt represent every single value but rather a "density estimation method"
        * takes *discrete* data (every single data point you begin with) and tries to interpolate values from that.
    * appropriate use and design of color scales is crucial for heat maps
        * use perceptually uniform color scales
* **Binned Map (hexbin)** (dist of values, discrete/arbitrary)
    * splits the geometry into hexagons
    * purpose is the same as a heat map to show densities etc.
    * each bin gets assigned a color
    * can also be used to encode categorical data
* **Choropleth Map** (dist of values, discrete/geo)
    * most popular
    * visualize some values associated to some regions
    * the regions are predefined like states/counties
    * what level of detail you want to use - sometimes certain patterns will pop up and low levels of detail
    * color mapping steps - sometimes a linear map skews the data. like if the histogram is very bottom heavy. You need to assign different scales. (non-uniform) this will give you more detail in the data at the cost of distorting the data
        * min/max, min/med/max, quartiles, quintiles
* **Symbol Map** (dist of values, discrete/geo)

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
