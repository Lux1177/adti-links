<template>
	<NuxtLink
		:style="{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
    }"
		:to="url" target="_blank"
		class="block bg-white rounded-3xl text-center cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_6px_0_#ddd6ff]"
	>
		<div class="flex flex-col items-center p-7 pb-8 relative overflow-hidden group h-full">
			<!-- Фон при наведении -->
			<div
				class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#f7f5ff] to-transparent"
			></div>

			<!-- Изображение -->
			<img
				:src="image"
				:alt="title"
				class="w-28 h-28 object-contain mb-4 select-none transition-all duration-300 ease-out group-hover:scale-110"
			/>

			<!-- Заголовок -->
			<h3 class="text-2xl font-semibold mb-4" :style="{ color: '#302C80' }">
				{{ title }}
			</h3>

			<!-- Разделитель -->
			<div class="w-full h-px mb-4 fade-line"></div>

			<!-- Описание -->
			<p class="text-base leading-snug z-10" :style="{ color: '#545569' }">
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
	url: String,
	delay: Number
})

const isVisible = ref(false)

onMounted(() => {
	setTimeout(() => {
		isVisible.value = true
	}, 50)
})

</script>

<style scoped>
/* тень под карточкой */
a {
	box-shadow: 0 4px 0px #ddd6ff;
}

/* градиентная линия между текстами */
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
