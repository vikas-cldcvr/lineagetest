<template>
  <f-lineage
    ref="lineage"
    direction="horizontal"
    :padding="28"
    :gap="100"
    :node-size.prop="{ width: 240, height: 53 }"
    :children-node-size.prop="{ width: 240, height: 32 }"
    :max-children="8"
    :links.prop="links"
    :nodes.prop="nodes"
    :node-template="nodeTemplate"
    :children-node-template="childNodeTemplate"
  ></f-lineage>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LineageNodeLinks, LineageNodes } from "@cldcvr/flow-lineage";

type LData = {
  nodes: LineageNodes;
  links: LineageNodeLinks;
  nodeTemplate: string;
  childNodeTemplate: string;
  newNodeCOunt: number;
};
export default defineComponent({
  name: "FlowLineage",
  data(): LData {
    return {
      newNodeCOunt: 0,
      nodes: {
        rdj: {
          fData: {
            fullName: "Robert Downey Jr.",
            description: "Movies",
            state: "secondary",
          },
          fChildren: {
            rdj_child: {
              fData: {
                icon: "i-hashtag",
                title: "Iron man 1",
              },
            },
          },
        },
        judge: {
          fData: {
            fullName: "The Judge",
            description: "Hank Palmer",
            state: "custom,#006ecc",
          },
        },
        ironman: {
          fData: {
            fullName: "Iron Man",
            description: "Tony stark",
            state: "secondary",
          },
          fChildren: {
            irchild1: {
              fData: {
                icon: "i-hashtag",
                title: "Iron man 1",
              },
            },
            irchild2: {
              fData: {
                icon: "i-paragraph",
                title: "Iron man 2",
              },
            },
          },
          fHideChildren: false,
        },
        hank: {
          fData: {
            fullName: "Hank Palmer",
            description: "Actor",
            state: "secondary",
          },
          fChildren: {
            child1: {
              fData: {
                icon: "i-hashtag",
                title: "Node child 1",
              },
            },
            child2: {
              fData: {
                icon: "i-paragraph",
                title: "Node child 2",
              },
            },
          },
          fHideChildren: false,
        },
      },
      links: [
        {
          from: "rdj",
          to: "judge",
        },
        {
          from: "rdj",
          to: "ironman",
        },
        {
          from: "judge",
          to: "hank",
        },
        {
          from: "iman1",
          to: "child1",
        },
      ],
      nodeTemplate: `<f-div
		  state=\${node.fData.state}
		  width="100%"
		  height="100%"
		  padding="small"
		  align="top-left"
		  variant="curved"
		  gap="small"
		  \${node.children && !node.hideChildren ? 'border="small solid default bottom"' : ""}
		>
			<f-pictogram variant="circle" source="\${node.fData.fullName}"></f-pictogram>
			<f-div direction="column">
				<f-text size="small" ellipsis>\${node.fData.fullName}</f-text>
				<f-text size="x-small" ellipsis>\${node.fData.description}</f-text>
			</f-div>
			\${node.childrenToggle}
		</f-div>`,
      childNodeTemplate: `<f-div
			state="secondary"
			width="100%"
			height="100%"
			padding="none medium"
			align="middle-left"
			gap="small"
			border="small solid default bottom"
		  >
			<f-icon source="\${node.fData.icon}" size="small"></f-icon>
			<f-text  size="small" ellipsis>\${node.fData.title}</f-text>
		  </f-div>`,
    };
  },
  mounted() {
    setInterval(() => {
      this.newNodeCOunt += 1;
      this.nodes[`test${this.newNodeCOunt}`] = {
        fData: {
          fullName: `Test${this.newNodeCOunt}`,
          description: "Hank Palmer",
          state: "custom,#006ecc",
        },
      };
      this.links.push({
        from: "hank",
        to: `test${this.newNodeCOunt}`,
      });
      this.nodes = { ...this.nodes };
      // (this.$refs.lineage as FLineage).requestUpdate();
    }, 5000);
  },
});
</script>
