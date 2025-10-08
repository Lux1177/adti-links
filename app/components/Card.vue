<template>
	<NuxtLink
		:to="link"
		class="block bg-white rounded-3xl text-center transition duration-200 hover:-translate-y-1"
	>
		<div class="flex flex-col items-center p-7 pb-8">
			<img
				:src="image"
				:alt="title"
				class="w-28 h-28 object-contain mb-5 select-none"
			/>

			<h3 class="text-2xl font-semibold mb-4" :style="{ color: '#302C80' }">
				{{ title }}
			</h3>

			<div class="w-full h-px mb-4 fade-line"></div>

			<p class="text-base leading-snug" :style="{ color: '#545569' }">
				{{ description }}
			</p>
		</div>
	</NuxtLink>
</template>

<script setup>
defineProps({
	image: String,
	title: String,
	description: String,
	link: String,
})
</script>

<style scoped>
a {
	position: relative;
	box-shadow: 0 4px 0px #ddd6ff;
	transition: transform 0.25s ease;
}

a:hover {
	transform: translateY(-5px);
}

/* градиентная разделительная линия */
.fade-line {
	background: linear-gradient(
		to right,
		transparent,
		#ddd6ff 25%,
		#ddd6ff 75%,
		transparent
	);
}
</style>
