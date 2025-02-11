<template>
	<div
		class="lg:w-[21.875rem] w-full lg:h-[15.625rem] bg-white rounded-lg lg:p-8 p-[1.75rem] border-t-4 font-poppins shadow-[0_15px_30px_-11px_rgba(131,166,210,0.5)]"
		:class="borderColor"
	>
		<h2 class="text-xl leading-normal font-semibold mb-1.5">{{ title }}</h2>
		<div class="mb-10 text-design-black text-[13px] opacity-50">
			{{ content }}
		</div>
		<div class="flex justify-end">
			<img class="lg:w-16 lg:h-16" :src="imgLink" alt="" />
		</div>
	</div>
</template>

<script setup>
defineProps({
	title: String,
	content: String,
	imgLink: String,
	borderColor: String,
});
</script>
