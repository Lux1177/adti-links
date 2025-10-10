<template>
	<div
		class="w-full py-5 flex justify-between items-center rounded-2xl mb-8"
	>
		<NuxtLink
			:to="url"
			class="flex items-center gap-2 text-[#302C80] bg-white px-4 py-2 rounded-xl shadow-sm hover:shadow-md hover:bg-[#edeaff] transition"
		>
			<Icon name="ph:arrow-left-bold" size="20" />
			<span class="font-medium">Orqaga</span>
		</NuxtLink>

		<h1 class="text-3xl font-semibold text-[#302C80] text-center">
			Foydali linklar
		</h1>
	</div>
</template>

<script setup>
defineProps({
	url: {
		type: String,
		required: true,
	},
})
</script>
