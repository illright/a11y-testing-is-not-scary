<template>
  <div className="flex">
    <img
      src="https://avatars.githubusercontent.com/u/15035286"
      className="rounded-full h-18 mr-4"
    />
    <div className="flex flex-col justify-center">
      <div className="font-bold text-xl">Лев Челядинов</div>
      <div className="text-lg"><slot>любит тестировать</slot></div>
    </div>
  </div>
</template>
