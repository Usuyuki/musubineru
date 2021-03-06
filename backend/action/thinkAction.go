package action

import(
	"github.com/gin-gonic/gin"
	"backend/responder"
	"backend/typefile"
	"backend/usecase/novel"
	"backend/service/nlp"
	"backend/service/tool"
	// "fmt"
)
func ThinkAction(c *gin.Context) {
	var data typefile.ThinkResponseType
	// var mr typefile.MorphologicalResponse
	var nouns map[string]int

	var response typefile.ThinkRequestType
	e := c.BindJSON(&response)
	if e == nil {
		data.What =response.What
		data.Why = response.Why
		data.How = response.How
		data.Result = "success"
	}else{
		data.Result = "fail"
	}
	
	
	
	//もらった文章の解析(名詞の配列だけ引っ張り出す)
	nouns = tool.MapMerge(nlp.GetNoun(data.What).Nouns,
		nlp.GetNoun(data.Why).Nouns,
		nlp.GetNoun(data.How).Nouns)
	//検索用に変換



	// data.Waka = []typefile.Waka{}
	// @todo ここは チャンネルで繋いで、並列動作させる
	data.Novel = novel.GetByNovel(nouns)
	// data.Homonym = []typefile.Homonym{}
	// data.Synonyms = []typefile.Synonyms{}
	
	responder.ThinkActionResponder(c,data)
}
