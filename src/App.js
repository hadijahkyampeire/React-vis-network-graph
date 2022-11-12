import React, { useState } from 'react';
import { 
  chain, 
  merge, 
  size, 
  spread, 
  union 
} from 'lodash';
import Graph from 'react-graph-vis';
import { schemafyKeys } from './utils';

import { secondHop, entity } from './data';

import './App.scss';

export const GraphSummary = ({ data = {} }) => {
  const { label, title, type, relationship } = data;
  return (
    <div className='info-section'>
      <div className='header'>Summary</div>
      <div className='row'>
        <span className='label'>Name:</span>
        <span className='value'>{label || '__'}</span>
      </div>
      <div className='row'>
        <span className='label'>Relationship:</span>
        <span className='value'>{title || relationship || '__'}</span>
      </div>
      <div className='row'>
        <span className='label'>Type:</span>
        <span className='value'>{type || '__'}</span>
      </div>
    </div>
  );
};

const renderImage = type => type === 'person'
  ? 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
  : type === 'company'
  ? 'https://cdn-icons-png.flaticon.com/512/4812/4812244.png'
  : type === 'owner'
  ? 'https://as1.ftcdn.net/v2/jpg/04/37/01/34/1000_F_437013476_uKlcuNHFZSk8LB1ijBmp5BCUPpCJ3iMo.jpg'
  : 'https://as2.ftcdn.net/v2/jpg/01/59/03/43/1000_F_159034305_V8nNQSkCeBCsm69DbM915m61e59f4muQ.jpg';

const constructNode = (id, type, name, relationship, hidden) => name ? { 
  id,  
  image: renderImage(type),
  label: name, 
  title: relationship,
  type,
  hidden,
  font: { color: 'white', size: 14 } 
} : {};

const constructEdge = (label, from, to) => label ? { 
  label,  
  from,
  to,
  font: { size: 14, color: '#fff' }
} : {};

export const VisNetwork = () => {
  const [selectedNode, setSelectedNode] = useState([1]);

  const { name, riskData: { results: entityResults } = {} } = entity || {};

  const results = entityResults || [];

  const associations = chain(results).map(r => r.associations).flatten().value();

  const mergedAssociations = associations.reduce((prev, curr) => merge(prev, curr), {});
  
  const { companies = [], direct_owners: directOwners = [], people = []  } = mergedAssociations;

  const peopleData = schemafyKeys(people);
  const companiesData = schemafyKeys(companies);
  const directOwnersData = schemafyKeys(directOwners);

  const secondPeopleData = schemafyKeys(secondHop.people);
  const secondCompaniesData = schemafyKeys(secondHop.companies);
  const secondDirectOwnersData = schemafyKeys(secondHop['direct-owners']);

  const peopleNodes = size(peopleData) ? peopleData.map(({ name, fullRelationships, type }, i) => constructNode(`person-${i}`, type, name, fullRelationships?.[0], false)) : [];
  const companyNodes = size(companiesData) ? companiesData.map(({ name, fullRelationships, type }, i) => constructNode(`company-${i}`, type, name, fullRelationships?.[0], false)) : [];
  const directOwnerNodes = size(directOwners) ? directOwnersData.map(({ name, fullRelationships, relationship, type }, i) => constructNode(`direct-owner-${i}`, type, name, fullRelationships?.[0], false)) : [];

  const secondPeopleNodes = secondPeopleData.map(({ name, type, fullRelationships }, i) => constructNode(`person-2-${i}`, type, name, fullRelationships?.[0], true));
  const secondCompanyNodes = secondCompaniesData.map(({ name, type, fullRelationships }, i) => constructNode(`company-2-${i}`, type, name, fullRelationships?.[0], true));
  const secondDirectOwnerNodes = secondDirectOwnersData.map(({ name, type, fullRelationships }, i) => constructNode(`direct-owner-2-${i}`, 'direct-owner', name, fullRelationships?.[0], true));

  const edgesArray = size(peopleData) ? peopleData.map(({ name, relationship }, i) => constructEdge(relationship, 1, `person-${i}`)) : [];
  const companyEdgesArray = size(companiesData) ? companiesData.map(({ name, relationship }, i) => constructEdge(relationship, 1, `company-${i}`)) : [];
  const directOwnersEdgesArray = size(directOwners) ? directOwnersData.map(({ relationship }, i) => constructEdge(relationship, 1, `direct-owner-${i}`)) : [];
  const secondDirectOwnerEdges = secondDirectOwnersData.map(({ relationship }, i) => constructEdge(relationship, 'direct-owner-0', `direct-owner-2-${i}`));

  const dataArrays = [
    peopleNodes,
    companyNodes,
    directOwnerNodes,
    secondCompanyNodes,
    secondDirectOwnerEdges,
    secondDirectOwnerNodes,
    secondPeopleNodes
  ];

  const mergeDataArrays = spread(union);

  const graph = {
    nodes: [
      { id: 1, label: name, title: name, font: { size: 24, color: '#fff' }, image: 'https://as2.ftcdn.net/v2/jpg/01/59/03/43/1000_F_159034305_V8nNQSkCeBCsm69DbM915m61e59f4muQ.jpg', },
      ...mergeDataArrays(dataArrays)
    ],
    edges: edgesArray
      .concat(companyEdgesArray)
      .concat(directOwnersEdgesArray)
      .concat(secondDirectOwnerEdges)
      .concat(
        [
          peopleData.length >= 2 ? constructEdge('linked To', 'person-1', 'person-2-1') : {},
          peopleData.length >= 2 ? constructEdge('linked To', 'person-1', 'person-2-2') : {},
          companiesData.length >= 1 ? constructEdge('linked To', 'company-0', 'company-2-0') : {},
          companiesData.length >= 1 ? constructEdge('linked To', 'company-0', 'company-2-2') : {},
          peopleData.length >= 1 ? constructEdge('Related To', 'person-0', 'person-2-0') : {},
          companiesData.length >= 2 ? constructEdge('linked To', 'company-1', 'company-2-1') : {},
        ])
  };

  const options = {
    layout: {
      hierarchical: true
    },
    interaction: {
      hover: true, 
      tooltipDelay: 300
    },
    edges: {
      color: '#fff',
      arrowStrikethrough: false, 
      font: {
        strokeWidth: 0,
        strokeColor: '#ffffff',
      }
    },
    nodes: {
      shape: 'image',
      size: 20,
      borderWidth: 2,
      color: {
        border: '#fff',
        background: '#fff',
      },
      font: { color: '#eeeeee' },
      shapeProperties: {
        useBorderWithImage: true,
      },
    },
    height: '700px',
    physics: {
      enabled: false,
      repulsion: {
        nodeDistance: 1000 // Put more distance between the nodes.
      },
    },
  };
  
  const events = {
    select: function(event) {
      const { nodes } = event;
      setSelectedNode(nodes);
      const nodesToUpdate = [];
  
      // If no nodes are selected, unhide all hidden nodes
      if (nodes.length === 0) {
        // Populate array with list of nodes to unhide
        this.body.data.nodes.forEach(node => {
          if (node.hidden) { 
            nodesToUpdate.push({ id: node.id, hidden: false });
          }
        });
        
        // Update nodes and return
        this.body.data.nodes.update(nodesToUpdate);
        return;
      }
        
      // One or more nodes are selected
      // Populate array with list of all nodes, hiding them
      this.body.data.nodes.forEach(node => {
        nodesToUpdate.push({ ...node, id: node.id });
      });

      // Pouplate array with list of selected and connected nodes to unhide
      // Note: Nodes will already exist in the array, but these later updates
      //       will overwrite the earlier ones.
      nodes.forEach(node => {
        // Add selected node
        nodesToUpdate.push({ id: node, hidden: false });
        
        // Add connected nodes to the selected node
        this.body.data.edges.forEach(edge => {
          // Unhide if connected from selected node and connected node exists
          if (edge.from === node && this.body.data.nodes.get(edge.to)) {
            nodesToUpdate.push({ id: edge.to, hidden: false });
          }
        });
      }); 
      
      // Submit updates to hide/unhide nodes
      this.body.data.nodes.update(nodesToUpdate);
    },
    // hoverEdge: function(event) {
    //   this.body.data.edges.update({id: event.edge, font: { size : 12 }});
    // },
    // blurEdge: function(e){
    //   this.body.data.edges.update({id: e.edge, font: { size : 0 }});
    // },
  };
  const hasData = size(peopleData) || size(companiesData) || size(directOwnersData);
  return hasData
    ? (
      <section className='vis-network-container'>
        <GraphSummary data={graph.nodes.find(n => selectedNode.includes(n.id))} />
        <Graph
          graph={graph}
          options={options}
          events={events}
          getNetwork={network => {
          //  if you want access to vis.js network api you can set the state in a parent component using this property
          }} />
      </section>
    )
    : <div>No Associations Found</div>;
};

