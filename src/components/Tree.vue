<template>
    <div class = 'tree '>
        <div class = 'tree-items'>
            <div  v-for="item in data" :key="item">
                <div class = 'tree-items_item' >
                    <p class = "item-hover"></p> <p class = "tree-items_item-name" @click="show_child(item.parent)"><i class="fa-solid fa-caret-right" :class="showlittle == item.parent? 'active': ''"></i> {{ item.parent }}</p>
                </div>
                <div  v-for="child in item.children" :key="child" >
                    <div class = 'tree-items_item child' :class="showlittle == item.parent? 'active': ''">
                        <p class = "item-hover"></p> <p class = "tree-items_item-name tree-child_item" @click="show_child_item(child.parent)"><i class="fa-solid fa-caret-right" :class="showList == child.parent ? 'active': ''"></i> {{ child.parent }}</p>
                    </div>
                    <div  v-for="child2 in child.children" :key="child2">
                        <div class = 'tree-items_item child2' :class="showList == child.parent ? 'active': ''">
                            <p class = "item-hover"></p> <p class = "tree-items_item-name tree-child_item" > {{ child2 }}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <RouterLink class="separat" to="/data">Ro'yxatlar</RouterLink>
        </div>
    </div>
    
</template>

<script setup>
import {defineProps, ref} from 'vue'
const {data} = defineProps(['data',])
const showlittle = ref(null)
const showList = ref(null)

function show_child(parent){
    showList.value = null
    if (showlittle.value == parent){
        showlittle.value = null
    }
    else{
        showlittle.value = parent
    }
}

function show_child_item(children){
    if (showList.value){
        showList.value = null
    }
    else{
        showList.value = children;
    }
}

</script>
