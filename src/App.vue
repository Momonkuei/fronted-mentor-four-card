<template>
	<div
		class="py-20 container px-10 xl:mx-auto xl:max-x-[90rem] flex flex-col xl:gap-16 gap-[4.75rem] h-screen"
	>
		<explain-label></explain-label>
		<card-group></card-group>
	</div>
</template>

<script setup>
import ExplainLabel from './components/ExplainLabel.vue';
import CardGroup from './components/CardGroup.vue';
</script>
