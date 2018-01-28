# What is Zorko all about ?

## Overview

Amount of data in world exponentially increase.
It's not only about big data but about small and mid-size data chunks available everywhere in the web. 
Different data visualizations become a norm on a day to day conversation between people.
However we usually have a report like visualizations, it means that consumer can't just continue data analysis or 
need some special knowledge and skills to do it. Things became worse when we need to prove that 
underlying data is reliable or discover an original data source

### Software System

First of all, Zorko it's software system which assembled withing few sub-projects.
It provides tools for user to create, share and explore datasets and visualization. 

### OSS by Default

Second, it's an Open Source by Default environment, so software system is free to reuse and extend.
One of the main goal is to provide high level of transparency over product vision and creation. 

It's a foundation to build community around product

Transparency is a one of the key values especially if we are going to `data proof area`

### Datasets and Visualizations Hub

Third, it's a SaaS platform with the same tools as software system, however available online.
One of the main proposes is to form an `analisys hub` with valuable datasets and visualizations.

### Embeddability

Provides a solid foundation to embed analytic to third-party solution, for example  API to add visualization widgets 
on third-party sites.

## Value for Users

### Uncovering Popular and Useful Datums and Visualizations

Provides community with information about most viewed visualizations and most reused datasets

### Basic Data Exploration and Analysis

We provide data exploration tools which should allow user to easily and quickly map 
some existing dataset to standard visualization and do basic analysis

### Visualization Creation and Reuse

We provide tools to create not trivial visualization, which require much more experience from users, however once
created, visualization might be reused by community
 
### Form a Collection of Globally Assessable Datasources  

We allow users to create datums, which are not real data, but descriptor of some remote data source, for example some
CSV file published over HTTP.

### Reusable Basic Data Preparation 

We allow users to save time and instead of defining same data transformation over and over again provide them with 
ability to move them in Datum and share across all related visualizations

## Context Diagram

<form id="myEmbeddedDiagramForm" target="myEmbeddedDiagram" method="post" action="https://structurizr.com/embed/express" style="display: none;">
<textarea name="definition">
{
  "type": "System Context",
  "scope": "Zorko",
  "description": "The system context diagram for the Zorko Platform",
  "size": "A5_Landscape",


  "elements": [
    {
      "type": "Person",
      "name": "Anonymous User",
      "description": "Anybody on the web",
      "tags": "",
      "position": "260,105"
    },
    {
      "type": "Software System",
      "name": "DataSource",
      "description": "Various JSON,CSV,TSV resources accessable over HTTP",
      "tags": "",
      "position": "230,1130",
      "containers": []
    },
    {
      "type": "Software System",
      "name": "Zorko",
      "description": "Hub to share, create and explore datasets and visualizations",
      "tags": "Internal",
      "position": "1415,580",
      "containers": []
    }
  ],


  "relationships": [
    {
      "source": "Anonymous User",
      "description": "View, create, explore datasets and visualizations under anonym authority",
      "technology": "",
      "destination": "Zorko",
      "tags": ""
    },
    {
      "source": "Zorko",
      "description": "Establish connection and fetch data",
      "technology": "Data consumption could be done as by client app as by server",
      "destination": "DataSource",
      "tags": ""
    }
  ],


  "styles": [
    {
      "type": "element",
      "tag": "Person",
      "width": "",
      "height": "",
      "background": "#08427b",
      "color": "#ffffff",
      "fontSize": "",
      "border": "",
      "opacity": "",
      "shape": "Person"
    },
    {
      "type": "element",
      "tag": "Software System",
      "width": "",
      "height": "",
      "background": "#1168bd",
      "color": "#ffffff",
      "fontSize": "",
      "border": "",
      "opacity": "",
      "shape": ""
    }
  ]
}
</textarea>
<input name="iframe" value="myEmbeddedDiagram" />
</form>

<iframe id="myEmbeddedDiagram" name="myEmbeddedDiagram" width="100%" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>

<script type="text/javascript">
document.getElementById('myEmbeddedDiagramForm').submit();
</script>

<script type="text/javascript" src="https://structurizr.com/static/js/structurizr-responsive-embed.js"></script>
