<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p class='description'>Generator for the perfect baby name for your child</p>
    <div class="options-container">
      <div class="option-container">
        <h3>Choose a gender</h3>
        <div class="option-buttons">
          <button 
            class="left option" 
            :class="options.gender === Gender.BOY && 'option-active'"
            @click="options.gender = Gender.BOY"
          >
            {{ Gender.BOY }}
          </button>
          <button 
            class="option" 
            :class="options.gender === Gender.UNISEX && 'option-active'"
            @click="options.gender = Gender.UNISEX"
          >
            {{ Gender.UNISEX }}
          </button>
          <button 
            class="right option" 
            :class="options.gender === Gender.GIRL && 'option-active'"
            @click="options.gender = Gender.GIRL"
          >
            {{ Gender.GIRL }}
          </button>
        </div>
      </div>
      <div class="option-container">
        <h3>Choose name popularity</h3>
        <div class="option-buttons">
          <button 
            class="left option" 
            :class="options.popularity === Popularity.UNIQUE && 'option-active'"
            @click="options.popularity = Popularity.UNIQUE"
          >
            {{ Popularity.UNIQUE }}
          </button>
          <button 
            class="right option" 
            :class="options.popularity === Popularity.TRENDY && 'option-active'"
            @click="options.popularity = Popularity.TRENDY"
          >
            {{ Popularity.TRENDY }}
          </button>
        </div>
      </div>
      <div class="option-container">
        <h3>Choose name length</h3>
        <div class="option-buttons">
          <button 
            class="left option" 
            :class="options.nameLength === NameLength.ALL && 'option-active'"
            @click="options.nameLength = NameLength.ALL"
          >
            {{ NameLength.ALL }}
          </button>
          <button 
            class="option " 
            :class="options.nameLength === NameLength.LONG && 'option-active'"
            @click="options.nameLength = NameLength.LONG"
          >
            {{ NameLength.LONG }}
          </button>
          <button 
            class="right option" 
            :class="options.nameLength === NameLength.SHORT && 'option-active'"
            @click="options.nameLength = NameLength.SHORT"
          >
            {{ NameLength.SHORT }}
          </button>
        </div>
      </div>
      <button class="primary" @click="findNames">Find Name</button>
    </div>
    <div class="name-list" v-for="name in filteredNames" :key="name.id">
      <p class="primary">{{ name.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue';
import OptionsState from './interface/OptionsState';
import {Gender} from './enums/Gender';
import {Popularity} from './enums/Popularity';
import {NameLength} from './enums/NameLength';
import {names, Name} from './data';

const filteredNames = ref<Name[]>([])
const options : OptionsState = reactive<OptionsState>({
  gender:Gender.GIRL,
  popularity:Popularity.UNIQUE,
  nameLength:NameLength.ALL,
});

const findNames = () => {
  return filteredNames.value = names.filter((name) => {
    if(options.nameLength === NameLength.ALL){
      return name.gender === options.gender && name.popularity === options.popularity
    }
    return name.gender === options.gender && name.popularity === options.popularity && name.nameLength === options.nameLength
    })
}

</script>

<style scoped>
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* color: rgb(0, 241, 153); */
  color: #4C35E6;
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}

h1{
  font-size: 3rem;
}

.description{
  padding: 2rem;
  font-size: 1.5rem;
}

.options-container {
  background-color:antiquewhite;
  border-radius: 2rem;
  padding: 2rem;
  width: 95%;
  margin: 0 auto;
  position: relative;
}

.option-container{
  margin-bottom: 2rem;
}

.option {
  background-color: white;
  color: #4C35E6;
  outline: 0.15rem solid #4C35E6;
  border: none;
  padding: 0.75rem;
  width: 12rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 200;
}

.left{
  border-radius: 1rem 0 0 1rem;
}

.right {
  border-radius: 0 1rem 1rem 0;
}

.option-active {
  background-color: #4C35E6;
  color: white;
}

.primary {
  background-color: #4C35E6;
  color: white;
  border-radius: 6.5rem;
  border: none;
  padding: 0.75rem 4rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}

.name-list {
  display: inline-grid;
  padding-left: 5px;
}
</style>