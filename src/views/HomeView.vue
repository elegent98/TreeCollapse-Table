
<template>
    <div class="container">
        <div class="box">
            <div class="tree-collapse pt-3">
                <Tree :data = "items" />           
            </div>
        </div>
    </div>
</template>

<script setup>
import Tree from '../components/Tree.vue'
const items = [
    {
        parent : "Models",
        children: [
            {
                parent : "Data warehouse",
                children: ['Report samples', 'Sales performance']
            }
        ]   
    },

    {
        parent : "Statistics",  
    },

]

</script>
