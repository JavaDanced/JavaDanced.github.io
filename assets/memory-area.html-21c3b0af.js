const e=JSON.parse('{"key":"v-1127ccd2","path":"/note/java/JVM/memory-area.html","title":"Java内存区域详解（重点）","lang":"zh-CN","frontmatter":{"title":"Java内存区域详解（重点）","category":"Java","tag":["JVM"],"description":"如果没有特殊说明，都是针对的是 HotSpot 虚拟机。 本文基于《深入理解 Java 虚拟机：JVM 高级特性与最佳实践》进行总结补充。 常见面试题： - 介绍下 Java 内存区域（运行时数据区） - Java 对象的创建过程（五步，建议能默写出来并且要知道每一步虚拟机做了什么） - 对象的访问定位的两种方式（句柄和直接指针两种方式） 前言 对于 ...","head":[["meta",{"property":"og:url","content":"https://javadance.cn/note/java/JVM/memory-area.html"}],["meta",{"property":"og:site_name","content":"企鹅君"}],["meta",{"property":"og:title","content":"Java内存区域详解（重点）"}],["meta",{"property":"og:description","content":"如果没有特殊说明，都是针对的是 HotSpot 虚拟机。 本文基于《深入理解 Java 虚拟机：JVM 高级特性与最佳实践》进行总结补充。 常见面试题： - 介绍下 Java 内存区域（运行时数据区） - Java 对象的创建过程（五步，建议能默写出来并且要知道每一步虚拟机做了什么） - 对象的访问定位的两种方式（句柄和直接指针两种方式） 前言 对于 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"企鹅君"}],["meta",{"property":"article:tag","content":"JVM"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java内存区域详解（重点）\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"企鹅君\\",\\"url\\":\\"https://javadance.cn\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"运行时数据区域","slug":"运行时数据区域","link":"#运行时数据区域","children":[{"level":3,"title":"程序计数器","slug":"程序计数器","link":"#程序计数器","children":[]},{"level":3,"title":"Java 虚拟机栈","slug":"java-虚拟机栈","link":"#java-虚拟机栈","children":[]},{"level":3,"title":"本地方法栈","slug":"本地方法栈","link":"#本地方法栈","children":[]},{"level":3,"title":"堆","slug":"堆","link":"#堆","children":[]},{"level":3,"title":"方法区","slug":"方法区","link":"#方法区","children":[]},{"level":3,"title":"运行时常量池","slug":"运行时常量池","link":"#运行时常量池","children":[]},{"level":3,"title":"字符串常量池","slug":"字符串常量池","link":"#字符串常量池","children":[]},{"level":3,"title":"直接内存","slug":"直接内存","link":"#直接内存","children":[]}]},{"level":2,"title":"HotSpot 虚拟机对象探秘","slug":"hotspot-虚拟机对象探秘","link":"#hotspot-虚拟机对象探秘","children":[{"level":3,"title":"对象的创建","slug":"对象的创建","link":"#对象的创建","children":[]},{"level":3,"title":"对象的内存布局","slug":"对象的内存布局","link":"#对象的内存布局","children":[]},{"level":3,"title":"对象的访问定位","slug":"对象的访问定位","link":"#对象的访问定位","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":23.72,"words":7116},"filePathRelative":"note/java/JVM/memory-area.md","autoDesc":true,"excerpt":""}');export{e as data};