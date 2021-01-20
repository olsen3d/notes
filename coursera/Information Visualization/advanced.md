# **Information Visualization: Advanced Techniques**

## Geographical Data

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
        * <span class="colour" style="color:rgb(192, 204, 219)">when the question pertain a phenomenon for which spatial proximity or extent is relevant (how far has the epidemic extended from its point of origin?)</span>
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
    * instead of representing quantity with color, we use the size of a bubble that is centered to the region the bubble is representing.
    * does not depend on the regions shape or size
    * easier to use multiple channels
        * an election map you can use bubble size for number of votes and color of bubble for party affiliation
    * does not solve the spatial density problem

##### Common issues
<br>
* **Base Rate Bias** \- human\-related events are often coorelated with population density \(showing a dot map with locations of public libraries\, seeing more libraries near cities\. high density regions are not more "cultutally advanced"\, they just have more people\)
    * to fix this - normalize the data according to population
* **Insensitivity to Sample Size** \- statistical artiffacts \- when you have large sample sizes\, numbers tend to be stable around the average\. If the sample size is too small\, values tend to be very high and very low\. \(oiscillating values\)
* **Skewed Spacial Distributions** \- small and large regions\. Like a worldmap European countries are all really small and then Russia and China etc\. are really large
    * Dorling Cartogram
* **Perceptual Issues** \- Its hard to estimate and compare values with color intensity\. And color perception affected by area size\.\.\. Also context affects perception \(if you have a large area of a color it will look different than a color on a small region\) also eye tricks can happen with context colors
* Map Projections - each map is a 2d representation of a 3d object. distortion of angles, areas, shapes, distances, directions.
    * Cylindrical - good for equator
    * Conocal - good for middle latitude
    * Azhimuthal - good for poles
    * Mercator - no angular distortion
    * Equivalent - preserve equivalent areas good for world map and small scale general
    * Conformal - preserve angular relationships, used for large scale maps
* Interference of map features - interference of the map layer and then the data layer.
    * keep in mind the focus in visualization is on spatial distribution of values contained in the data.
    * how many and which details do you really need from the map?
    * few colors or shades of gray are best
    * no strong lines or borders

###### Maps + Time
<br>
(Spatial + Temporal) visualizing map data that chages over time. example people moving in a city some techniques:

* **Animation** \- mapping time to time\. catchy and has good aesthetics but it can be confusing\, use with caution\!
    * good for coherent trends that are easy to follow
    * Make the animation user-controlled
    * pair it up with a timeline
    * coroing the time change (color fades from green to red etc.)
    * use traces (ghosts, trails)
* **Faceting** \- small multiples\. map time to space\. less familiar but less confusing\. show each frame as its own map
* **No Map** \- use something else

<br>
<br>
<br>
## Network Data
<br>
Data sets that desctibe connections between objects (relationships)

Tabular Data - shape of tabular data is typically:

* Objects + Values
* (categories, quantities)
* very similar to temporal data

Objects: Nodes
Relationships: Links (edges)
You might have two tables one that represents the nodes and oen that represents the links
Example: friendship network

How do you visualize network data?

1. node-link diagrams
    1. Force-directed layouts - nodes as dots and connections by lines.
        1. nodes are attracted and repulsed forces between the nodes. repeat until a stable positioning is found.
        2. main goal is to visualize the structure of the network
    2. Fixed layouts
2. matrices

Additional attributes - can be encoded in nodes and links

* **Nodes**
    * Color
    * Shape
    * Size
* **Links**
    * Thickness
    * Pattern - dotted or solid line

<br>
Fixed Layouts - position of the nodes is fixed according to some criteria

* **Circular** \- nodes equidistant around a circle \- most common
* **Linear** \- along a line
* **Grid** \- fixed 2d grid layout

When is a fixed layout more appropriate than a force-directed layout? Force directed is for showing structure of the network. if structure is not as important use a fixed.
Fixed has good visibility and their properties and degree.
Since layout is fixed nodes can be split into different meaningful categories

**Edge Bundling** \- edges curve around a circular network\. reduce clutter by bundling\.

fixed layout spatial - on a map. nodes correspond to spatial locations - migration maps

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
