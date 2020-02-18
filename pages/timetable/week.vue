<template>
  <div>
    <h1>Week plan</h1>
    <Schedule
		:time-ground="['07:00', '18:00']"
		:week-ground="['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']"
		:task-detail="[
			[
				{
				dateStart: '09:30',
				dateEnd: '10:30',
				title: 'Metting',
				detail: 'Metting (German: Mettingen) is a commune in the Moselle department in Grand Est in north-eastern France.'
				},
				{
					dateStart: '11:30',
					dateEnd: '13:50',
					title: 'User 2',
				}
			],
			[],
			[
				{
				dateStart: '09:35',
				dateEnd: '12:30',
				title: 'Metting',
				detail: 'Metting (German: Mettingen) is a commune in the Moselle department in Grand Est in north-eastern France.'
				},
				{
					dateStart: '11:30',
					dateEnd: '13:50',
					title: 'User 2',
				}
			]
		]">
		</Schedule>
  </div>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>

<style lang="scss">
  ul{
    padding: 0;
    li{
      list-style-type: none;
    }
  }
  .v-application ul, .v-application ol{
    padding: 0;
  }
</style>