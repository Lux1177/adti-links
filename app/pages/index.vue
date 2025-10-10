<template>
	<div class="min-h-screen bg-bg-main dark:bg-gray-900 p-4 md:p-8 flex justify-center">
		<div class="w-full max-w-7xl mx-4 py-8 md:py-12">
			<Header url="https://my.agmi.uz/"/>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
				<Card
					v-for="(link, index) in LINKS"
					:key="link.title"
					:title="link.title"
					:description="link.description"
					:url="link.url"
					:image="link.image"
					:delay="200 + (index * 50)"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

import Card from "~/components/Card.vue";
import {LINKS} from "~/data/links";

</script>
