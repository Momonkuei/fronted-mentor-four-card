<template>
	<div class="grid gap-[1.875rem] xl:grid-cols-3 mx-auto items-center">
		<card
			title="Supervisor"
			content="Monitors activity to identify project roadblocks"
			imgLink="../images/icon-supervisor.svg"
			borderColor="border-design-cyan "
		></card>
		<div class="flex flex-col gap-[1.875rem]">
			<card
				title="Team Builder"
				content="Scans our talent network to create the optimal team for your project"
				imgLink="../images/icon-team-builder.svg"
				borderColor="border-design-red "
			></card>

			<card
				title="Karma"
				content="Regularly evaluates our talent to ensure quality"
				imgLink="../images/icon-karma.svg"
				borderColor="border-design-orange "
			></card>
		</div>

		<card
			title="Calculator"
			content="Uses data from past projects to provide better delivery estimates"
			imgLink="../images/icon-calculator.svg"
			borderColor="border-design-blue "
		></card>
	</div>
</template>

<script setup>
import Card from './Card.vue';
</script>
