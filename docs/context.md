# Context

## System

Zorko is an open platform which allows user to connect to different data sources like files, databases, etc., so that
user able to explore provided datasets, build different visualizations and share not only visualization, but complete projects

## Actors

### Anonymous User

Anybody on the web. Able to view publicly shared visualization, interact with them without changing

### Public User

Authenticated into the system, with free plan, can't build private projects

### Member User

Authenticated into the system, with private plan, can host as public as private projects

> In case you host your own instance, then all your users able to have public and private projects

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
      "position": "110,180"
    },
    {
      "type": "Software System",
      "name": "Github",
      "description": "",
      "tags": "",
      "position": "860,1395",
      "containers": []
    },
    {
      "type": "Person",
      "name": "Member User",
      "description": "User signed in using Github ID, with private plan",
      "tags": "",
      "position": "1740,210"
    },
    {
      "type": "Person",
      "name": "Public User",
      "description": "User signed in using Github ID, with free plan",
      "tags": "",
      "position": "925,15"
    },
    {
      "type": "Software System",
      "name": "Zorko",
      "description": "Allows to explore datasets from provided projects, share exploration result",
      "tags": "Internal",
      "position": "855,755",
      "containers": []
    }
  ],


  "relationships": [
    {
      "source": "Anonymous User",
      "description": "View shared looks, can continue exploration without save",
      "technology": "All data analyze on the client-side",
      "destination": "Zorko",
      "tags": ""
    },
    {
      "source": "Member User",
      "description": "Link/Unlink own  public and private repositories to workspace",
      "technology": "",
      "destination": "Zorko",
      "tags": ""
    },
    {
      "source": "Public User",
      "description": "Link/Unlink own  public only  repositories to workspace",
      "technology": "",
      "destination": "Zorko",
      "tags": ""
    },
    {
      "source": "Zorko",
      "description": "Get user profile information, use repositories to store projects",
      "technology": "",
      "destination": "Github",
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
